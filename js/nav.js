/* =========================================================
   FLOATING NAVIGATION
   Smooth-scrolls to each section and highlights the current
   one as the visitor scrolls (only visible after the
   invitation has been opened — see js/cover.js).
========================================================= */

(function () {
  "use strict";

  var navLinks = document.querySelectorAll("#floating-nav a");
  var sectionIds = ["story", "events", "venue", "gallery"];
  var sections = sectionIds.map(function (id) {
    return document.getElementById(id);
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var id = link.getAttribute("data-section");
      var target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  function updateScrollSpy() {
    var scrollPos = window.scrollY + window.innerHeight * 0.35;
    var currentId = null;
    sections.forEach(function (sec) {
      if (sec && sec.offsetTop <= scrollPos) currentId = sec.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle(
        "active",
        link.getAttribute("data-section") === currentId
      );
    });
  }

  window.addEventListener("scroll", updateScrollSpy, { passive: true });
  updateScrollSpy();
})();
