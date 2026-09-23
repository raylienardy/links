# Raynato Lienardy — Personal Link Hub

Link-in-bio statis untuk Raynato Lienardy. Dark default, light optional, host GitHub Pages.

## Struktur

```
links/
├── index.html
├── css/style.css
├── js/main.js
├── assets/
│   ├── profile.webp
│   ├── favicon.png
│   └── og-image.png
└── README.md
```

## Ganti konten

- **Foto**: `assets/profile.webp` atau URL di `index.html` → `img.profile-avatar`
- **WA**: `https://wa.me/6285824855398`
- **IG / Email**: icon row di header (`div.social-icon-row`)
- **Portfolio/CV/GitHub/LinkedIn**: `ul.links-list` → `a.link-card`

## Icon row — tambah TikTok / X

```html
<a href="https://tiktok.com/@USERNAME" class="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></a>
<a href="https://x.com/USERNAME" class="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="X"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
```

Paste di `div.social-icon-row` di `index.html`.

## Tema

- Toggle pojok kanan atas. Simpan `localStorage["theme"]`.
- Default ikut `prefers-color-scheme`. Anti-FOUC via inline script di `<head>` sebelum CSS.

## Deploy Pages

Settings → Pages → Branch `main` / `root` → `https://raylienardy.github.io/links/`

## Catatan

- Vanilla JS saja (`js/main.js` → theme + mouse gradient RAF). Tanpa lib.
- Font Awesome 6 + Google Fonts Inter.
