# Rencana Website Portofolio

## Kondisi Saat Ini

| Item | Status |
|------|--------|
| Template | Astro basics (v7.2.10) |
| Node.js | v20.17.0 (**tidak kompatibel** - Astro 7 butuh v22+) |
| Tailwind | Belum terpasang |
| Components | Hanya `Welcome.astro` (default) |
| Assets | Kosong (belum ada gambar) |

---

## 1. Perbaikan Kompatibilitas

**Masalah**: Astro 7.x membutuhkan Node.js >= 22.12.0, tapi Anda punya v20.17.0.

**Solusi**: Downgrade ke **Astro 4.x** yang mendukung Node 20.

```
package.json:
- astro: "^7.2.10" → "^4.16.0"
- Tambah @astrojs/tailwind & tailwindcss
- Hapus engines constraint
```

---

## 2. Instalasi & Konfigurasi

| Package | Fungsi |
|---------|--------|
| `astro@^4.16.0` | Framework SSG |
| `@astrojs/tailwind@^5.1.0` | Integrasi Tailwind ke Astro |
| `tailwindcss@^3.4.0` | Utility CSS framework |

**Konfigurasi yang perlu dibuat/diubah:**
- `astro.config.mjs` - Tambah integrasi Tailwind
- `tailwind.config.mjs` - Konfigurasi dark mode + custom theme
- `src/styles/global.css` - Base styles + custom CSS

---

## 3. Struktur Component

```
src/
├── layouts/
│   └── Layout.astro              # Layout utama (judul, meta, fonts)
├── components/
│   ├── Navbar.astro              # Navigasi + Theme Toggle
│   ├── Hero.astro                # Landing section
│   ├── About.astro               # Tentang saya
│   ├── Skills.astro              # Grid keahlian
│   ├── Projects.astro            # Kartu proyek
│   ├── Experience.astro          # Timeline pengalaman
│   ├── Contact.astro             # Form + sosial media
│   ├── ThemeToggle.astro         # Tombol dark/light mode
│   ├── SectionTitle.astro        # Reusable section heading
│   └── Footer.astro              # Footer
├── pages/
│   └── index.astro               # Halaman utama (single page)
└── styles/
    └── global.css                # Global styles
```

---

## 4. Desain Kreatif & Unik

### Konsep Visual

| Elemen | Implementasi |
|--------|-------------|
| **Typography** | Font modern (Inter untuk body, Space Grotesk untuk heading) |
| **Warna** | Palet ungu-biru gradient (#6C63FF → #3B82F6) sebagai aksen |
| **Background** | Dark: slate-900, Light: white dengan subtle gradient |
| **Cards** | Glass morphism effect (backdrop-blur + semi-transparent) |
| **Borders** | Gradient borders menggunakan `border-image` |
| **Shadows** | Glow effects berwarna aksen |

### Animasi & Interaksi

| Efek | Lokasi | Implementasi |
|------|--------|-------------|
| **Typing effect** | Hero | CSS `@keyframes` dengan `steps()` |
| **Fade-in-up** | Semua section | CSS `@keyframes` + `IntersectionObserver` |
| **Hover lift** | Kartu skills & projects | CSS `transform: translateY()` + `transition` |
| **Glow pulse** | CTA button | CSS `box-shadow` animation |
| **Smooth scroll** | Navigasi | CSS `scroll-behavior: smooth` |
| **Gradient shift** | Background accents | CSS `background-position` animation |

---

## 5. Dark/Light Mode

### Implementasi

- Toggle button di navbar (ikon matahari/bulan)
- Persist preference di `localStorage`
- Default mengikuti `prefers-color-scheme` system
- Transisi halus saat switching (`transition: background-color 0.3s`)
- Tailwind `darkMode: 'class'` strategy

### Mekanisme

```
1. Script di <head> cek localStorage → apply class "dark" ke <html>
2. ThemeToggle component toggle class "dark"
3. Semua element pakai: light styles + dark: variants
```

---

## 6. Konten Placeholder

Setiap section akan diisi dengan placeholder yang mudah diganti:

| Section | Placeholder Content |
|---------|-------------------|
| **Hero** | "[Nama Anda]" + "Full Stack Developer" + typing animation |
| **About** | Avatar SVG + Lorem ipsum singkat + 3 fun facts |
| **Skills** | 8-10 skill cards (HTML, CSS, JS, React, Node.js, dll) |
| **Projects** | 4-6 kartu proyek dengan gambar placeholder |
| **Experience** | 2-3 timeline entries |
| **Contact** | Form (nama, email, pesan) + 4 sosial media icons |

---

## 7. Responsive Design

| Breakpoint | Layout |
|------------|--------|
| Mobile (< 640px) | Single column, hamburger menu |
| Tablet (640-1024px) | 2 column grid |
| Desktop (> 1024px) | Full layout, sidebar nav (opsional) |

---

## 8. File yang Perlu Dibuat/Diubah

| File | Aksi |
|------|------|
| `package.json` | **Ubah** - downgrade Astro, tambah Tailwind |
| `astro.config.mjs` | **Ubah** - tambah integrasi Tailwind |
| `tailwind.config.mjs` | **Buat** - konfigurasi theme & dark mode |
| `src/styles/global.css` | **Buat** - base styles, animations, custom CSS |
| `src/layouts/Layout.astro` | **Ubah** - tambah fonts, meta, global CSS import |
| `src/components/Navbar.astro` | **Buat** |
| `src/components/Hero.astro` | **Buat** |
| `src/components/About.astro` | **Buat** |
| `src/components/Skills.astro` | **Buat** |
| `src/components/Projects.astro` | **Buat** |
| `src/components/Experience.astro` | **Buat** |
| `src/components/Contact.astro` | **Buat** |
| `src/components/ThemeToggle.astro` | **Buat** |
| `src/components/SectionTitle.astro` | **Buat** |
| `src/components/Footer.astro` | **Buat** |
| `src/pages/index.astro` | **Ubah** - import semua sections |
| `src/components/Welcome.astro` | **Hapus** - tidak dipakai |
| `public/images/` | **Buat** - untuk gambar proyek/avatar |

---

## 9. Urutan Pengerjaan

```
Step 1:  Fix package.json + install dependencies
Step 2:  Konfigurasi Astro + Tailwind
Step 3:  Buat global.css + animations
Step 4:  Buat Layout.astro (updated)
Step 5:  Buat ThemeToggle.astro
Step 6:  Buat Navbar.astro
Step 7:  Buat Hero.astro
Step 8:  Buat About.astro
Step 9:  Buat Skills.astro
Step 10: Buat Projects.astro
Step 11: Buat Experience.astro
Step 12: Buat Contact.astro
Step 13: Buat Footer.astro
Step 14: Buat SectionTitle.astro (reusable)
Step 15: Update index.astro (compose all)
Step 16: Cleanup (hapus Welcome.astro)
Step 17: Testing (npm run dev)
```
