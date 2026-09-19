# Rencana Website Portofolio

## Stack Final

| Komponen | Versi |
|----------|-------|
| Node.js | v24.21.0 (terpasang, LTS) |
| Astro | 7.x (latest) |
| Tailwind | 4.x (via `@tailwindcss/vite`) |
| GitHub | repo manual |

**Catatan**: Astro 7 + Tailwind v4 memakai konfigurasi berbasis CSS (`@theme`, `@custom-variant`), bukan `tailwind.config.mjs`.

---

## 1. Setup Awal

```bash
npx astro add tailwind   # otomatis: vite plugin + src/styles/global.css
```

- `astro.config.mjs` → tambah `@tailwindcss/vite` plugin
- `src/styles/global.css` → `@import "tailwindcss";`

### Konfigurasi Theme & Dark Mode (di `global.css`)

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-accent: #6C63FF;
  --color-accent-alt: #3B82F6;
  --font-heading: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

---

## 2. Struktur Component

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
    └── global.css                # Global styles + theme + animations
```

---

## 3. Desain Kreatif & Unik

### Konsep Visual

| Elemen | Implementasi |
|--------|-------------|
| **Typography** | Inter (body) + Space Grotesk (heading) |
| **Warna** | Gradient ungu-biru (#6C63FF → #3B82F6) |
| **Background** | Dark: slate-900, Light: white + subtle gradient |
| **Cards** | Glass morphism (backdrop-blur + semi-transparent) |
| **Borders** | Gradient borders |
| **Shadows** | Glow effects berwarna aksen |

### Animasi & Interaksi

| Efek | Lokasi | Implementasi |
|------|--------|-------------|
| **Typing effect** | Hero | CSS `@keyframes` + `steps()` |
| **Fade-in-up** | Semua section | `@keyframes` + `IntersectionObserver` |
| **Hover lift** | Kartu skills & projects | `transform` + `transition` |
| **Glow pulse** | CTA button | `box-shadow` animation |
| **Smooth scroll** | Navigasi | `scroll-behavior: smooth` |
| **Gradient shift** | Background accents | `background-position` animation |

---

## 4. Dark/Light Mode

- Toggle button di navbar (ikon matahari/bulan)
- Persist preference di `localStorage`
- Default mengikuti `prefers-color-scheme` system
- Transisi halus saat switching
- Tailwind v4: `@custom-variant dark (&:where(.dark, .dark *))`

### Mekanisme

```
1. Script di <head> cek localStorage → apply class "dark" ke <html>
2. ThemeToggle component toggle class "dark"
3. Semua element pakai: light styles + dark: variants
```

---

## 5. Konten Placeholder

| Section | Placeholder Content |
|---------|-------------------|
| **Hero** | "[Nama Anda]" + "Full Stack Developer" + typing animation |
| **About** | Avatar SVG + bio singkat + 3 fun facts |
| **Skills** | 8-10 skill cards |
| **Projects** | 4-6 kartu proyek |
| **Experience** | 2-3 timeline entries |
| **Contact** | Form (nama, email, pesan) + sosial media |

---

## 6. Responsive Design

| Breakpoint | Layout |
|------------|--------|
| Mobile (< 640px) | Single column, hamburger menu |
| Tablet (640-1024px) | 2 column grid |
| Desktop (> 1024px) | Full layout |

---

## 7. Workflow Git/GitHub

### Aturan Commit
- **Commit per step**: setelah satu step selesai, langsung commit
- **Format**: `step <nomor>: <deskripsi singkat>`
- **Push**: dilakukan atas permintaan user (remote diurus manual)

### Setup
```bash
git init
git branch -M main
```

---

## 8. Urutan Pengerjaan + Commit

| Step | Pengerjaan | Commit Message | Status |
|------|-----------|----------------|--------|
| 0 | Init Git repository | `step 0: init git repository` | ✅ |
| 1 | Setup Astro 7 + Tailwind v4 | `step 1: setup astro 7 with tailwind v4` | ✅ |
| 2 | Konfigurasi theme & dark mode | `step 2: configure theme and dark mode` | ✅ |
| 3 | Global styles + animations | `step 3: add global styles and animations` | ✅ |
| 4 | Update `Layout.astro` | `step 4: update layout with fonts and meta` | ✅ |
| 5 | `ThemeToggle.astro` | `step 5: create theme toggle component` | ✅ |
| 6 | `Navbar.astro` | `step 6: create navbar component` | ✅ |
| 7 | `Hero.astro` | `step 7: create hero section` | ✅ |
| 8 | `About.astro` (+ `SectionTitle.astro`) | `step 8: create about section` | ✅ |
| 9 | `Skills.astro` | `step 9: create skills section` | ⏳ |
| 10 | `Projects.astro` | `step 10: create projects section` | ⏳ |
| 11 | `Experience.astro` | `step 11: create experience section` | ⏳ |
| 12 | `Contact.astro` | `step 12: create contact section` | ⏳ |
| 13 | `Footer.astro` | `step 13: create footer component` | ⏳ |
| 14 | `SectionTitle.astro` (dibuat di step 8) | `step 14: verify reusable section title` | ⏳ |
| 15 | Compose `index.astro` | `step 15: compose all sections in index` | ⏳ |
| 16 | Cleanup `Welcome.astro` | `step 16: cleanup unused default components` | ⏳ |
| 17 | Testing `npm run dev` | `step 17: initial testing and verification` | ⏳ |
