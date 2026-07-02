"use strict";

console.log('tracking.js loaded');

const trackingConfig = {
  ga4Id: "",
  gtmId: "",
  googleAdsId: "",
  googleAdsConversionLabel: "",
  clarityId: "",
  metaPixelId: "",
  tiktokPixelId: "",
  microsoftAdsId: ""
};

function loadScript(src, attrs = {}) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
  document.head.appendChild(script);
}

function initTracking() {
  console.log('initTracking() called');
  try {
    const cookieBar = document.querySelector(".cookie-bar");
    if (cookieBar) {
      console.log('cookie bar found', cookieBar);
    } else {
      console.error('cookie bar not found');
    }

    let accepted;
    try {
      accepted = localStorage.getItem("coolinglab_tracking");
      console.log('read localStorage coolinglab_tracking:', accepted);
    } catch (e) {
      console.error('localStorage read failed', e);
      throw e;
    }

    // Pre-authorize tracking (temporary): set enabled by default if not present
    if (!accepted) {
      try {
        localStorage.setItem("coolinglab_tracking", "enabled");
        accepted = "enabled";
        console.log('pre-authorized tracking (temporary): coolinglab_tracking=enabled');
      } catch (e) {
        console.error('pre-authorization localStorage write failed', e);
      }
    }

    const enable = () => {
      console.log('enable() called');
      try {
        localStorage.setItem("coolinglab_tracking", "enabled");
        console.log('localStorage written: coolinglab_tracking=enabled');
      } catch (e) {
        console.error('localStorage write failed', e);
        throw e;
      }
      if (cookieBar) {
        cookieBar.hidden = true;
        console.log('banner hidden');
      }

    // GA4 & Google Ads Global Tag initialization
    const needsGtag = trackingConfig.ga4Id || trackingConfig.googleAdsId;
    if (needsGtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(){ window.dataLayer.push(arguments); };
      const mainId = trackingConfig.ga4Id || trackingConfig.googleAdsId;
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${mainId}`);
      window.gtag("js", new Date());

      if (trackingConfig.ga4Id) {
        window.gtag("config", trackingConfig.ga4Id, { anonymize_ip: true });
      }
      if (trackingConfig.googleAdsId) {
        window.gtag("config", trackingConfig.googleAdsId);
      }
    }

    // GTM Integration
    if (trackingConfig.gtmId) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      loadScript(`https://www.googletagmanager.com/gtm.js?id=${trackingConfig.gtmId}`);
    }

    // Clarity Integration
    if (trackingConfig.clarityId) {
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window,document,"clarity","script",trackingConfig.clarityId);
    }

    // Meta Pixel Integration
    if (trackingConfig.metaPixelId) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', trackingConfig.metaPixelId);
      window.fbq('track', 'PageView');
    }

    // TikTok Pixel Integration
    if (trackingConfig.tiktokPixelId) {
      !function (w, d, t) {
        w.TiktokSdkObject = t;var ttq = w[t] = w[t] || [];ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
        ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } };for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
        ttq.instance = function (t) { var e = ttq._i[t] || [];for (var n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);return e };ttq.load = function (e, n) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};var o = d.createElement("script");o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t;var a = d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o, a) };
        ttq.load(trackingConfig.tiktokPixelId);
        ttq.page();
      }(window, document, 'ttq');
    }

    // Microsoft Ads Integration
    if (trackingConfig.microsoftAdsId) {
      (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:trackingConfig.microsoftAdsId};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&"loaded"!==s&&"complete"!==s||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
    }
  };

  if (!accepted && cookieBar) cookieBar.hidden = false;
  if (accepted === "enabled") enable();

  const acceptBtn = document.querySelector("[data-cookie-accept]");
  if (acceptBtn) {
    console.log('accept button found', acceptBtn);
    acceptBtn.addEventListener("click", (e) => {
      console.log('accept click detected');
      try {
        enable();
      } catch (err) {
        console.error('exception during enable', err);
        throw err;
      }
    });
  } else {
    console.error('accept button not found');
  }

  const declineBtn = document.querySelector("[data-cookie-decline]");
  if (declineBtn) {
    console.log('decline button found', declineBtn);
    declineBtn.addEventListener("click", () => {
      try {
        localStorage.setItem("coolinglab_tracking", "disabled");
        console.log('localStorage written: coolinglab_tracking=disabled');
      } catch (e) {
        console.error('localStorage write failed (decline)', e);
        throw e;
      }
      if (cookieBar) {
        cookieBar.hidden = true;
        console.log('banner hidden (decline)');
      }
    });
  } else {
    console.error('decline button not found');
  }

  const resetBtn = document.querySelector("[data-cookie-reset]");
  if (resetBtn) {
    console.log('reset button found', resetBtn);
    resetBtn.addEventListener("click", () => {
      try {
        localStorage.removeItem("coolinglab_tracking");
        console.log('localStorage removed: coolinglab_tracking');
      } catch (e) {
        console.error('localStorage remove failed (reset)', e);
        throw e;
      }
      if (cookieBar) {
        cookieBar.hidden = false;
        console.log('banner shown (reset)');
      }
    });
  } else {
    console.error('reset button not found');
  }

  document.querySelectorAll("[data-affiliate-link]").forEach((link) => {
    link.addEventListener("click", () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "affiliate_click", cta: link.dataset.cta || "unknown" });
      
      // Google Ads Conversion
      if (window.gtag && trackingConfig.googleAdsId && trackingConfig.googleAdsConversionLabel) {
        window.gtag("event", "conversion", {
          send_to: `${trackingConfig.googleAdsId}/${trackingConfig.googleAdsConversionLabel}`
        });
      }
      
      // Meta Pixel Conversion
      if (window.fbq && trackingConfig.metaPixelId) {
        window.fbq('track', 'Lead', { content_name: 'Froza AC Affiliate Click', cta: link.dataset.cta || 'unknown' });
      }

      // TikTok Pixel Conversion
      if (window.ttq && trackingConfig.tiktokPixelId) {
        window.ttq.track('ClickButton', { content_name: 'Froza AC Affiliate Click', cta: link.dataset.cta || 'unknown' });
      }

      // Microsoft Ads Conversion
      if (window.uetq && trackingConfig.microsoftAdsId) {
        window.uetq.push('event', 'affiliate_click', { 'event_category': 'Outbound', 'event_label': link.dataset.cta || 'unknown' });
      }
    });
  });
  } catch (e) {
    console.error('initTracking exception', e);
    throw e;
  }
}
