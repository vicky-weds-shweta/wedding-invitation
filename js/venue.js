/* =========================================================
   VENUE + GOOGLE MAPS BUTTON
   Reads venue details from weddingData.venue (js/config.js).
   If mapsUrl is left empty, the "View on Google Maps" button
   is automatically disabled — never a broken/dead link.
========================================================= */

(function () {
  "use strict";

  document.getElementById("venue-name").textContent = weddingData.venue.name;
  document.getElementById("venue-address").textContent =
    weddingData.venue.address;

  var mapsLink = document.getElementById("venue-maps-link");
  var venueHint = document.getElementById("venue-hint");

  if (weddingData.venue.mapsUrl) {
    mapsLink.href = weddingData.venue.mapsUrl;
    venueHint.style.display = "none";
  } else {
    mapsLink.setAttribute("disabled", "true");
    mapsLink.setAttribute("aria-disabled", "true");
    mapsLink.removeAttribute("href");
    mapsLink.style.pointerEvents = "none";
  }
})();
