# Raynato Lienardy — Personal Link Hub

Website personal link-in-bio statis untuk **Raynato Lienardy**, Full-Stack Web & Mobile Developer berbasis di Makassar, Indonesia. Dibuat murni menggunakan HTML5 dan CSS3, di-host di GitHub Pages.

## Struktur Project

```
links/
├── index.html
├── css/
│   └── style.css
├── assets/
│   ├── profile.webp
│   ├── favicon.png
│   └── og-image.png
└── README.md
```

## Panduan Penggantian Aset & Placeholder

1. **Foto Profil (`assets/profile.webp`)**: Ganti dengan foto profil rasio 1:1 format WebP.
2. **Favicon (`assets/favicon.png`)**: Ganti dengan icon website.
3. **Open Graph Image (`assets/og-image.png`)**: Ganti dengan banner preview sosial media (1200x630px).
4. **Instagram URL**: Edit `index.html`, ganti `https://instagram.com/USERNAME_ANDA` dengan URL Instagram profil Anda.
5. **WhatsApp Number**: Edit `index.html`, ganti nomor pada `https://wa.me/62XXXXXXXXXX` dengan format internasional tanpa simbol `+` dan tanpa angka `0` di depan (contoh: `6281234567890`).
6. **Email Publik**: Edit `index.html`, ganti `email@example.com` pada tag `mailto:email@example.com` dengan email aktif Anda.

## Deploy ke GitHub Pages

1. Pastikan repository bernama `links` di akun GitHub `raylienardy`.
2. Push branch `main` ke repository GitHub.
3. Buka repository di GitHub -> **Settings** -> **Pages**.
4. Pada bagian **Build and deployment**, pilih Source: **Deploy from a branch**, Branch: `main` dan `/ (root)`.
5. Website akan tersedia di `https://raylienardy.github.io/links/`.

## Catatan Teknis

- **Static-Only**: Tidak ada build tool, package manager, bundler, framework, atau JavaScript.
- **Ikon**: Menggunakan Font Awesome 6 Free via CDN resmi.
