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
│   ├── favicon.png
│   └── og-image.png
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

**Hapus featured section** — tidak ada section terpisah. Featured = primary CTA di dalam list (anti duplikasi). Jika ingin hapus efek featured, hapus class `link-card--primary` seperti di atas. Style featured di `css/style.css` → `.link-card--primary`, `--primary-border`, `--primary-glow`, `.link-badge`.

**Tambah TikTok / X di icon row** — `index.html` → `div.social-icon-row`, copy 1 baris:
```html
<a href="https://tiktok.com/@USERNAME" class="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></a>
<a href="https://x.com/USERNAME" class="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="X"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
```

**Foto / favicon / OG image** — ganti file di `assets/` atau URL `img.profile-avatar` di HTML.

## Tema

Toggle pojok kanan atas. Simpan `localStorage["theme"]`, default ikut `prefers-color-scheme`. Anti-FOUC via inline `<script>` di `<head>` sebelum CSS.

## Deploy Pages

Settings → Pages → Branch `main` / `root` → `https://raylienardy.github.io/links/`

## Teknis

- `js/main.js` → theme + mouse gradient (`requestAnimationFrame`, hormati `prefers-reduced-motion`)
- Font Awesome 6 + Google Fonts Inter
- Static-only, tanpa build step
