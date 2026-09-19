/* =========================================================
   WEDDING EVENTS TIMELINE
   Renders every event from weddingData.events (js/config.js)
   and draws the gold progress line as the visitor scrolls.
========================================================= */

(function () {
  "use strict";

  var timelineEl = document.getElementById("timeline");
  var timelineProgress = document.getElementById("timeline-progress");

  function render() {
    weddingData.events.forEach(function (ev, index) {
      var item = document.createElement("div");
      item.className = "tl-item reveal" + (ev.isMain ? " main-event" : "");
      item.innerHTML =
        '<span class="tl-index">' + String(index + 1).padStart(2, "0") + "</span>" +
        '<span class="tl-dot" aria-hidden="true"></span>' +
        '<div class="tl-content">' +
        '<p class="tl-date">' + ev.date + "</p>" +
        '<h3 class="tl-title">' + ev.name + "</h3>" +
        '<p class="tl-desc">' + ev.description + "</p>" +
        '<p class="tl-place">' + ev.location + "</p>" +
        '</div>';
      timelineEl.appendChild(item);
    });
  }

  function updateProgress() {
    var rect = timelineEl.getBoundingClientRect();
    var vh = window.innerHeight;
    var total = rect.height;
    var visible = vh * 0.75 - rect.top;
    var pct = Math.max(0, Math.min(1, visible / total));
    timelineProgress.style.height = pct * 100 + "%";
  }

  render();
  updateProgress();

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  // Re-observe the freshly-rendered .reveal items (reveal.js runs after this)
  window.__timelineRendered = true;
})();
