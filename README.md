# Shweta & Vicky — Wedding Invitation

A premium, single-page wedding invitation site. No build step, no
dependencies — just static files you can open locally or host on
GitHub Pages for free.

## Folder structure

```
wedding-invitation/
├── index.html                     ← the page itself
├── css/
│   └── style.css                  ← all visual styling + petal animation styles
├── js/
│   ├── config.js                  ← ✏️ EDIT THIS for names, dates, events, venue, maps
│   ├── cover.js                   ← "Open Invitation" transition
│   ├── countdown.js               ← live countdown logic
│   ├── timeline.js                ← renders the wedding events timeline
│   ├── venue.js                   ← renders venue name/address + maps button
│   ├── nav.js                     ← floating navigation + scrollspy
│   ├── music.js                   ← background music controller
│   ├── petals.js                  ← ambient falling flower petal animation
│   └── reveal.js                  ← fade-in-on-scroll for every section
└── assets/
    ├── music/
    │   └── (put wedding.mp3 here)
    └── images/
        └── gallery/
            └── (put photo-1.jpg … photo-6.jpg here)
```

## Where to add things

| What                     | Where                                         |
|--------------------------|------------------------------------------------|
| Names, dates, events     | `js/config.js`                                 |
| Venue name & address     | `js/config.js` → `venue` object                |
| Google Maps link         | `js/config.js` → `venue.mapsUrl`               |
| Background music         | `assets/music/wedding.mp3`                     |
| Gallery photos           | `assets/images/gallery/photo-1.jpg` … `photo-6.jpg` |

You should almost never need to touch `index.html`, `css/style.css`,
or the other `js/` files — `js/config.js` and the two `assets/`
folders are the only things you'll edit day to day.

## Getting a Google Maps link

1. Open [Google Maps](https://maps.google.com) and search your venue.
2. Click **Share** → **Copy link**.
3. Paste it as `mapsUrl` in `js/config.js`.
4. Leave it as `""` (empty) and the "View on Google Maps" button
   automatically stays disabled — nothing looks broken either way.

## Running it locally

Just open `index.html` in a browser — no server or build tools needed.
(Some browsers restrict local file access slightly; if the audio or
fonts seem off locally, that's normal and resolves itself once hosted.)

## Deploying to GitHub Pages

1. Create a new **public** GitHub repository.
2. Upload this entire folder's contents to the repo root, keeping the
   folder structure intact (drag-and-drop upload preserves folders).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a
   branch", **Branch** to `main`, folder to `/ (root)`, then **Save**.
5. Wait 1–2 minutes, then refresh — GitHub shows your live URL, e.g.
   `https://your-username.github.io/your-repo-name/`.
6. Share that link. Test it on your own phone first.

Future edits: change `js/config.js` (or add files to `assets/`),
upload the changed files back to the same GitHub repo, and Pages
redeploys automatically within a minute or two.
