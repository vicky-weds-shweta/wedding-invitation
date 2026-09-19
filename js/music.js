/* =========================================================
   MUSIC CONTROLLER
   -----------------------------------------------------
   Expects an audio file at: assets/music/wedding.mp3
   (see the <audio> tag in index.html to change the path).

   Browsers block autoplay with sound, so music only starts
   once the visitor clicks "Open Invitation" (js/cover.js
   calls window.__tryPlayMusic() for this). If the file is
   missing, the button quietly disables itself — the page
   never breaks either way.
========================================================= */

(function () {
  "use strict";

  var musicBtn = document.getElementById("music-btn");
  var audio = document.getElementById("bg-audio");
  // ensure audio loops reliably
  try{ audio.loop = true; }catch(e){}
  var audioAvailable = true;

  audio.addEventListener("error", function () {
    audioAvailable = false;
    musicBtn.setAttribute("disabled", "true");
    musicBtn.style.opacity = "0.35";
    musicBtn.style.cursor = "not-allowed";
    musicBtn.setAttribute("aria-label", "Background music unavailable");
  });

  musicBtn.addEventListener("click", function () {
    if (!audioAvailable) return;
    if (audio.paused) {
      audio
        .play()
        .then(function () {
          musicBtn.classList.add("playing");
          musicBtn.setAttribute("aria-pressed", "true");
          musicBtn.setAttribute("aria-label", "Pause background music");
        })
        .catch(function () {});
    } else {
      audio.pause();
      musicBtn.classList.remove("playing");
      musicBtn.setAttribute("aria-pressed", "false");
      musicBtn.setAttribute("aria-label", "Play background music");
    }
  });

  // Exposed so cover.js can attempt to start music right when the
  // invitation opens (still subject to the browser's autoplay rules).
  window.__tryPlayMusic = function () {
    if (!audioAvailable) return;
    try {
      var p = audio.play();
      if (p && typeof p.then === "function") {
        p.then(function () {
          musicBtn.classList.add("playing");
          musicBtn.setAttribute("aria-pressed", "true");
        }).catch(function () {
          // Autoplay blocked — visitor can still tap the button manually.
        });
      }
    } catch (e) {
      /* no-op */
    }
  };
})();
