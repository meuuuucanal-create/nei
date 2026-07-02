"use strict";

function initAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  const scoreRows = document.querySelectorAll(".score-row");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    scoreRows.forEach((row) => {
      const bar = row.querySelector(".bar span");
      if (bar) bar.style.width = `${row.dataset.score}%`;
    });
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => revealObserver.observe(item));

  const scoreObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const bar = entry.target.querySelector(".bar span");
      if (bar) bar.style.width = `${entry.target.dataset.score}%`;
      scoreObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  scoreRows.forEach((row) => scoreObserver.observe(row));
}
