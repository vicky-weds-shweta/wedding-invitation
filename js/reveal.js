/* =========================================================
   SCROLL REVEAL
   Fades + slides each .reveal element into place the first
   time it enters the viewport. Runs after timeline.js so the
   dynamically-added event items are included too.
========================================================= */

(function () {
  "use strict";

  var revealEls = document.querySelectorAll(".reveal");

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach(function (el) {
    io.observe(el);
  });
})();
