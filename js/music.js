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

  // SVG icons (kept as strings so we can swap icons without editing HTML)
  var ICON_PLAY = '<svg viewBox="0 0 24 24" fill="none" id="music-icon-default"><path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="1.4"/><circle cx="18" cy="16" r="3" stroke="currentColor" stroke-width="1.4"/></svg>';
  var ICON_MUTED = '<svg viewBox="0 0 24 24" fill="none" id="music-icon-muted"><path d="M9 18V5l6-1v5.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="1.4"/><line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';

  // initialize icon (HTML may already include an SVG; replace to keep consistent)
  try { musicBtn.innerHTML = ICON_MUTED; } catch (e) {}

  audio.addEventListener("error", function () {
    audioAvailable = false;
    musicBtn.setAttribute("disabled", "true");
    musicBtn.style.opacity = "0.35";
    musicBtn.style.cursor = "not-allowed";
    musicBtn.setAttribute("aria-label", "Background music unavailable");
    try { musicBtn.innerHTML = ICON_MUTED; } catch (e) {}
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
          try { musicBtn.innerHTML = ICON_PLAY; } catch (e) {}
        })
        .catch(function () {});
    } else {
      audio.pause();
      musicBtn.classList.remove("playing");
      musicBtn.setAttribute("aria-pressed", "false");
      musicBtn.setAttribute("aria-label", "Play background music");
      try { musicBtn.innerHTML = ICON_MUTED; } catch (e) {}
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
          try { musicBtn.innerHTML = ICON_PLAY; } catch (e) {}
        }).catch(function () {
          // Autoplay blocked — visitor can still tap the button manually.
        });
      }
    } catch (e) {
      /* no-op */
    }
  };
})();
