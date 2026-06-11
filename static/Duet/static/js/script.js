/* ============================================================
   Interactive behavior — no dependencies.
   Runs after load-config.js has filled all data-src slots.
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* ---- Nav: transparent over the banner, frosted white past it ---- */
  var nav = document.getElementById("nav");
  var hero = document.getElementById("top");
  if (nav) {
    var onScroll = function () {
      var threshold = hero ? hero.offsetHeight - 64 : 8;
      if (window.scrollY > threshold) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Animated bar chart (grows when scrolled into view) ---- */
  var atChart = document.getElementById("at-chart");
  if (atChart && "IntersectionObserver" in window) {
    atChart.classList.add("at-pre");
    var atIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); atIo.unobserve(en.target); }
      });
    }, { threshold: 0.35 });
    atIo.observe(atChart);
  }

  /* ---- Reveal on scroll ---- */
  var revealTargets = document.querySelectorAll("main .section");
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  }
});
