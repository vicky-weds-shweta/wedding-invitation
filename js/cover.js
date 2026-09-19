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

  // Add a gentle attention pulse to the Open Invitation button until interaction
  try {
    if (openBtn && !openBtn.classList.contains('attention')) {
      setTimeout(function () {
        openBtn.classList.add('attention');
      }, 900);

      var removeAttention = function () {
        openBtn.classList.remove('attention');
      };
      openBtn.addEventListener('mouseover', removeAttention, { once: true });
      openBtn.addEventListener('focus', removeAttention, { once: true });
      openBtn.addEventListener('touchstart', removeAttention, { once: true, passive: true });
      openBtn.addEventListener('click', removeAttention, { once: true });
    }
  } catch (e) {
    // ignore
  }
})();
