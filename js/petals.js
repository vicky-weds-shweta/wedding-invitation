/* =========================================================
   FLOWER PETAL ANIMATION
   Generates a soft, ambient layer of drifting petals.
   Runs continuously behind the whole page at low density so
   it stays elegant rather than distracting. Automatically
   skipped for visitors with "reduce motion" enabled.

   To tweak the feel:
     PETAL_COUNT   -> how many petals drift at once
     colors[]      -> petal color variations
     duration      -> how slow/fast they fall (seconds)
========================================================= */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  var PETAL_COUNT = 10;
  var fallAnimations = ["petalFallA", "petalFallB", "petalFallC"];
  var colors = ["#B79A68", "#C9AF8A", "#9C8050", "#E4D5C2"];

  // Simple 5-petal flower-petal SVG shape, single path, easy to recolor via currentColor
  var petalSVG =
    '<svg viewBox="0 0 24 24" fill="currentColor">' +
    '<path d="M12 2c3 3 4 6 2 10-2 4-2 6 0 10-3-3-6-4-10-2-4 2-6 2-2-2 3-3 4-6 2-10-2-4-2-6 2-10z" opacity="0.9"/>' +
    "</svg>";

  function createPetalLayer() {
    var layer = document.createElement("div");
    layer.id = "petal-layer";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);
    return layer;
  }

  function spawnPetal(layer) {
    var petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = petalSVG;

    var size = 10 + Math.random() * 12; // 10–22px
    var left = Math.random() * 100; // vw %
    var duration = 14 + Math.random() * 12; // 14–26s
    var delay = Math.random() * -26; // negative = already mid-fall on load
    var anim = fallAnimations[Math.floor(Math.random() * fallAnimations.length)];
    var color = colors[Math.floor(Math.random() * colors.length)];

    petal.style.left = left + "vw";
    petal.style.width = size + "px";
    petal.style.height = size + "px";
    petal.style.color = color;
    petal.style.animation =
      anim + " " + duration + "s linear " + delay + "s infinite";

    layer.appendChild(petal);
  }

  function init() {
    var layer = createPetalLayer();
    for (var i = 0; i < PETAL_COUNT; i++) {
      spawnPetal(layer);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
