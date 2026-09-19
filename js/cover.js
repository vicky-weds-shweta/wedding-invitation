/* =========================================================
   OPEN INVITATION TRANSITION
   Handles the cinematic transition from the cover screen
   into the rest of the invitation: unlocks scrolling, fades
   the cover out, reveals the floating nav + music button,
   attempts to start the music, then scrolls to "Our Story".
========================================================= */

(function () {
  "use strict";

  var cover = document.getElementById("cover");
  var mainContent = document.getElementById("main-content");
  var openBtn = document.getElementById("open-invitation-btn");
  var floatingNav = document.getElementById("floating-nav");
  var musicBtn = document.getElementById("music-btn");

  function openInvitation() {
    document.body.classList.remove("lock");
    cover.classList.add("hide");
    mainContent.classList.add("visible");
    floatingNav.classList.add("visible");
    musicBtn.classList.add("visible");

    if (typeof window.__tryPlayMusic === "function") {
      window.__tryPlayMusic();
    }

    setTimeout(function () {
      var story = document.getElementById("story");
      if (story) story.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  }

  openBtn.addEventListener("click", openInvitation);
  openBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openInvitation();
    }
  });
})();
