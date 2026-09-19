/* =========================================================
   LIVE COUNTDOWN
   Counts down in real time to weddingData.weddingDateISO
   (set in js/config.js). Swaps to "The Day Has Arrived"
   automatically once the date passes.
========================================================= */

(function () {
  "use strict";

  var targetDate = new Date(weddingData.weddingDateISO).getTime();

  var cdActive = document.getElementById("countdown-active");
  var cdArrived = document.getElementById("countdown-arrived");
  var elDays = document.getElementById("cd-days");
  var elHours = document.getElementById("cd-hours");
  var elMinutes = document.getElementById("cd-minutes");
  var elSeconds = document.getElementById("cd-seconds");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  var timer;

  function update() {
    var diff = targetDate - Date.now();

    if (diff <= 0) {
      cdActive.style.display = "none";
      cdArrived.style.display = "block";
      cdArrived.classList.add("in-view");
      clearInterval(timer);
      return;
    }

    var seconds = Math.floor(diff / 1000);
    var days = Math.floor(seconds / 86400);
    seconds -= days * 86400;
    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    elDays.textContent = pad(days);
    elHours.textContent = pad(hours);
    elMinutes.textContent = pad(minutes);
    elSeconds.textContent = pad(seconds);
  }

  update();
  timer = setInterval(update, 1000);
})();
