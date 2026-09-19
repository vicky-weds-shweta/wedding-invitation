/* =========================================================
   WEDDING DATA — edit everything here.
   This is the ONLY file you should need to touch to update
   names, dates, events, venue, or the maps link. Nothing
   else in the project needs to change.
========================================================= */

var weddingData = {
  bride: "Shweta",
  groom: "Vicky",

  // ISO date + time with the +05:30 (India) timezone offset.
  // The countdown on the page uses this exact value.
  weddingDateISO: "2026-11-25T00:00:00+05:30",

  location: "Damoh, Madhya Pradesh, India",

  // -----------------------------------------------------
  // 📍 VENUE + GOOGLE MAPS
  // -----------------------------------------------------
  // Fill in the real venue name and address once you have it.
  // To get a maps link: open Google Maps → search the venue →
  // click "Share" → "Copy link" → paste it below as mapsUrl.
  // Leaving mapsUrl as "" automatically hides/disables the
  // "View on Google Maps" button on the site — nothing breaks.
  venue: {
    name: "Hotel Royal Damyanti Palace",                     // <-- replace with real venue name
    address: "Damoh, Madhya Pradesh, India",   // <-- replace with full address
    mapsUrl: "https://www.google.com/maps/place/Hotel+Royal+Damyanti+Palace/@23.7993804,79.4524991,17z/data=!3m1!4b1!4m10!3m9!1s0x398201001eda2433:0x96e727abd72ee0f9!5m3!1s2026-11-24!4m1!1i2!8m2!3d23.7993755!4d79.455074!16s%2Fg%2F11xdttwz6t?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D"                                 // <-- paste your Google Maps share link here
  },

  // -----------------------------------------------------
  // 🗓️ EVENTS — shown on the timeline, in this order
  // -----------------------------------------------------
  events: [
    {
      name: "Engagement",
      date: "24 November 2026",
      location: "Damoh, Madhya Pradesh",
      description: "A quiet, joyful start — the first formal step of our journey together, surrounded by close family."
    },
    {
      name: "Cake Celebration",
      date: "24 November 2026",
      location: "Damoh, Madhya Pradesh",
      description: "A sweet little celebration to mark the beginning of the festivities, shared with our nearest and dearest."
    },
    {
      name: "Haldi",
      date: "25 November 2026",
      location: "Damoh, Madhya Pradesh",
      description: "A morning full of turmeric, laughter and blessings, as family and loved ones gather to prepare us for the big day."
    },
    {
      name: "Baraat",
      date: "25 November 2026",
      location: "Damoh, Madhya Pradesh",
      description: "The groom's joyous procession, with music and dancing, leading Vicky to his bride."
    },
    {
      name: "Wedding Ceremony",
      date: "25 November 2026",
      location: "Damoh, Madhya Pradesh",
      description: "The main event — Shweta and Vicky take their vows, surrounded by everyone they hold dear.",
      isMain: true   // keep this flag only on the one event you want visually highlighted
    },
    {
      name: "Reception",
      date: "30 November 2026",
      location: "Patna, Bihar",
      description: "An evening to celebrate the newly married couple, with family and friends new and old."
    }
  ]
};

/* =========================================================
   🎵 MUSIC
   -----------------------------------------------------
   Drop your audio file into:  assets/music/wedding.mp3
   (exactly that filename, or update the <source> path in
   index.html to match whatever you name it).
   The music button in the corner of the site will simply
   stay visible but do nothing if no file is present — it
   never breaks the page.
========================================================= */

/* =========================================================
   🖼️ PHOTOS
   -----------------------------------------------------
   Drop up to 6 photos into: assets/images/gallery/
   named exactly:
     photo-1.jpg, photo-2.jpg, photo-3.jpg,
     photo-4.jpg, photo-5.jpg, photo-6.jpg
   Each gallery tile automatically shows the matching photo
   once it exists, and falls back to the elegant placeholder
   tile if that file is missing — so you can add photos one
   at a time. (Any image format works as long as the filename
   and extension match what's referenced in index.html.)
========================================================= */
