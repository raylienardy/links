# Raynato Lienardy — Personal Link Hub

Link-in-bio statis, dark default + light, host GitHub Pages. Vanilla only.

## Struktur

```
links/
├── index.html
├── css/style.css
├── js/main.js
├── assets/
│   ├── profile.webp
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── icons/
│   │   ├── favicon.svg (symlink/copy source)
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── apple-touch-icon.png
│   │   ├── android-chrome-192x192.png
│   │   └── android-chrome-512x512.png
│   └── (opsional) og-image.png, qr.png
└── README.md
```

## Cara mengubah

**Bio / tagline** — `index.html` cari:
```html
<!-- Bio/tagline: ganti sesuai preferensi -->
<p class="profile-bio">Building web, mobile & AI-powered applications.</p>
```
Ganti teks dalam `<p>`. Hapus baris jika tidak perlu.

**Status badge** — `index.html` cari:
```html
<!-- Status badge: ganti/ubah/hapus sesuai kebutuhan -->
<div class="status-badge"> ... Open to opportunities ... </div>
```
Ganti teks `Open to opportunities`. Dot ikut warna teks via `currentColor`.

**Hapus status badge** — hapus seluruh `div.status-badge` di atas. Tidak perlu ubah CSS.

**Primary CTA** — `index.html` → link Portfolio punya `class="link-card link-card--primary"` + badge:
```html
<span class="link-badge"><i class="fa-solid fa-star"></i> Featured</span>
```
Untuk pindah primary ke link lain, pindah class `link-card--primary` + blok `link-badge` + wrapper `link-text-group`. Untuk nonaktifkan hierarki, hapus `link-card--primary` dan kembalikan ke `<span class="link-text">Portfolio</span>` polos.

**Tambah TikTok / X di icon row** — `index.html` → `div.social-icon-row`, copy 1 baris:
```html
<a href="https://tiktok.com/@USERNAME" class="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></a>
<a href="https://x.com/USERNAME" class="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="X"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
```

**Asset & Metadata**

- **Favicon** — semua file di `assets/icons/`:
  - `favicon.svg` → icon utama (modern browsers)
  - `favicon.ico` → legacy browsers
  - `favicon-16x16.png` / `favicon-32x32.png`
  - `apple-touch-icon.png` (180×180, iOS)
  - `android-chrome-192x192.png` / `android-chrome-512x512.png`
  - Untuk generate ulang dari source SVG: upload `assets/favicon.svg` ke https://realfavicongenerator.net lalu replace semua file di `assets/icons/`.
- **OG Image**: Edit `assets/og-image.svg` untuk kustomisasi share-preview. Convert ke `assets/og-image.png` 1200×630 (Inkscape / screenshot browser).
- **QR Code**: Generate manual untuk `https://raylienardy.github.io/links/` → simpan `assets/qr.png` (untuk print/kartu nama).

## Tema

Toggle pojok kanan atas. Simpan `localStorage["theme"]`, default ikut `prefers-color-scheme`. Anti-FOUC via inline `<script>` di `<head>` sebelum CSS.

## Deploy Pages

Settings → Pages → Branch `main` / `root` → `https://raylienardy.github.io/links/`

## Teknis

- `js/main.js` → theme + mouse gradient (`requestAnimationFrame`, hormati `prefers-reduced-motion`)
- Font Awesome 6 + Google Fonts Inter
- Static-only, tanpa build step
