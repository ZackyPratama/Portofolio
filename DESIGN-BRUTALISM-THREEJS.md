# Acuan Redesign Portofolio — Brutalism & Three.js

## 1. Tujuan dan batas pekerjaan

Mengubah total visual portofolio menjadi berani, kreatif, dan khas melalui tipografi besar, komposisi asimetris, kontras kuat, serta interaksi 3D yang terarah. Konten tetap mudah dibaca dan navigasi tetap sederhana.

Dokumen ini menjadi acuan implementasi dan checklist status; verifikasi browser masih pending jika belum ditandai selesai.

### Keputusan pengguna

- Gaya visual: brutalism.
- Palet: black, burgundy, white.
- Library animasi 3D: Three.js.
- Hero: sculpture geometris abstrak yang bereaksi terhadap pointer.
- Cakupan Three.js: Hero dan Projects.
- Konten personal yang sudah diubah pengguna harus dipertahankan.

### Tidak termasuk

- Membuat profil tim; situs tetap portofolio pribadi.
- Mengarang pengalaman, metrik hasil, tahun proyek, atau studi kasus.
- Backend form, layanan email, deployment, atau push GitHub.
- Commit otomatis; commit hanya setelah diminta secara eksplisit.
- Mengganti framework atau menambah library animasi lain.

## 2. Sistem visual

### Warna

| Token | Nilai | Penggunaan |
|---|---|---|
| Black | `#0A0A0A` | Teks utama, border, shadow keras, panel gelap |
| Burgundy | `#800020` | Sculpture, CTA, panel aksen, penanda section |
| White | `#FFFFFF` | Teks di panel gelap dan permukaan utama |
| Off-white | `#F7F4EF` | Permukaan alternatif bernuansa kertas |

Off-white merupakan turunan white dari proposal awal, bukan warna aksen tambahan. Jangan menambah neon, biru, ungu, atau gradient dekoratif.

- White/off-white dengan teks black menjadi mode terang.
- Black dengan teks white/off-white menjadi mode gelap.
- Burgundy memakai teks white. Jangan gunakan teks burgundy kecil di atas black, atau black kecil di atas burgundy.
- Kontras akhir wajib diperiksa: minimal 4.5:1 untuk teks normal dan 3:1 untuk teks besar serta komponen UI relevan.
- Pertahankan theme toggle dan penyimpanan preferensi yang sudah ada.

### Tipografi

- Pertahankan Space Grotesk untuk heading dan Inter untuk body; tidak perlu menambah font.
- Hero memakai ukuran responsif `clamp()`, berat 700, line-height sekitar 0.9–1.0.
- Heading section besar, rapat, dan dapat memakai uppercase.
- Body minimal 16px dengan line-height sekitar 1.6; label sekunder minimal 12px.
- Panjang paragraf sekitar 55–70 karakter per baris.
- Teks tidak boleh terpotong pada layar kecil atau zoom 200%.

### Bentuk dan komposisi

- Border utama 3px; elemen besar dapat menggunakan 4px.
- Shadow keras tanpa blur, offset 6–10px desktop dan 3–5px mobile.
- Sudut utama kotak, radius 0–4px. Bentuk bulat hanya untuk elemen dekoratif yang memang disengaja.
- Hilangkan glassmorphism, glow, gradient lembut, blur dekoratif, dan tombol pill.
- Gunakan garis pembagi tebal, nomor section, label editorial, dan grid asimetris.
- Rotasi kecil maksimal sekitar 3 derajat hanya pada dekorasi; jangan miringkan paragraf atau form.
- Gunakan ruang kosong sebagai penyeimbang, bukan memenuhi setiap area dengan animasi.

## 3. Struktur halaman

Urutan dan anchor dipertahankan: Navbar, Hero (`hero`), About (`about`), Skills (`skills`), Projects (`projects`), Experience (`experience`), Contact (`contact`), Footer.

### Navbar

- Wordmark pengguna tetap dipertahankan.
- Bar navigasi solid dengan border bawah tebal; tanpa backdrop blur.
- Link aktif, hover, dan fokus terlihat jelas.
- Menu mobile mempertahankan tombol dengan label aksesibel dan `aria-expanded` yang sesuai.
- Sticky navigation tidak menutupi anchor atau konten saat fokus keyboard.

### Hero

- Komposisi desktop dua area: identitas/headline dominan dan sculpture 3D.
- Nama, peran, dan deskripsi pengguna tetap menjadi konten HTML, bukan teks dalam canvas.
- CTA utama menuju Projects; CTA sekunder menuju Contact.
- Sculpture abstrak burgundy berupa komposisi geometris, dengan pencahayaan tegas dan aksen black/white.
- Pointer memberi perubahan rotasi kecil dan halus, bukan kamera yang bergerak agresif.
- Mobile menumpuk teks dan sculpture. Sculpture tidak menghalangi CTA.
- Label editorial atau marquee dapat digunakan, tetapi dekoratif dan tidak menduplikasi teks untuk pembaca layar.

### About

- Pertahankan bio dan foto pengguna jika sudah tersedia saat implementasi.
- Foto memakai frame kotak, border tebal, shadow offset, dan caption editorial.
- Jangan menimpa foto asli dengan placeholder atau mengubah nama/path aset tanpa kebutuhan.
- Statistik tampil sebagai blok angka besar; nilai harus berasal dari konten yang ada atau konfirmasi pengguna.
- Jika data masih placeholder, jangan menyajikannya sebagai klaim baru yang telah diverifikasi.

### Skills

- Ubah kartu menjadi grid tipografi atau blok label solid dengan border tegas.
- Pertahankan daftar teknologi pengguna.
- Hindari indikator persentase baru yang tidak punya dasar data.
- Hover menekan/mengangkat blok secara singkat; keyboard mendapat penanda fokus setara.

### Projects

- Layout editorial: proyek utama lebih besar, proyek lain dalam grid yang lebih sederhana.
- Tiap kartu menampilkan judul, ringkasan, stack, dan link valid yang tersedia.
- Metadata role, tahun, dan hasil hanya ditampilkan bila datanya tersedia; jangan mengarang.
- Gunakan screenshot asli jika tersedia. Jika belum ada, gunakan ilustrasi geometris dengan label yang jelas, bukan tampilan palsu yang diklaim sebagai screenshot.
- Three.js memberi aksen geometris atau kedalaman pada preview aktif saat hover/fokus.
- Konten, tombol, dan navigasi tetap HTML. Canvas hanya dekoratif.
- Link tidak boleh hanya muncul saat hover. Tersedia untuk keyboard dan touch.
- Link `#` tidak boleh dipromosikan menjadi tombol studi kasus yang seolah berfungsi; sembunyikan atau tampilkan status belum tersedia.
- Jangan membuat halaman studi kasus kosong hanya untuk memenuhi desain.

### Experience

- Timeline menjadi susunan editorial dengan garis tebal, tanggal, jabatan, dan organisasi.
- Pertahankan data aktual yang ada; placeholder tidak boleh diubah menjadi pengalaman rekaan.
- Mobile satu kolom dengan urutan baca kronologis yang jelas.

### Contact

- Heading besar dan form dengan label permanen, field kotak, border tegas, serta CTA burgundy.
- Pertahankan validasi native, tipe input email, dan atribut required.
- Link sosial tampil jelas dan dapat diakses tanpa ikon saja.
- Endpoint form harus diperiksa saat implementasi. Jika masih `#`, nyatakan form belum aktif dan sediakan link email; jangan menampilkan konfirmasi kirim palsu.
- Integrasi pengiriman pesan berada di luar scope redesign.

### Footer

- Penutup berupa wordmark besar, garis pembatas, navigasi ringkas, dan tahun dinamis.
- Branding pengguna dipertahankan.
- Tidak menambah kredit atau klaim yang tidak diminta.

## 4. Spesifikasi Three.js

### Integrasi

- Tambahkan dependency `three` karena secara eksplisit diminta. Periksa versi yang kompatibel saat implementasi dan perbarui lockfile.
- Jalankan inisialisasi hanya di browser; jangan mengakses DOM/WebGL saat server build.
- Muat modul 3D secara dinamis agar konten HTML tidak menunggu renderer.
- Tidak perlu React, React Three Fiber, GSAP, atau library animasi tambahan.
- Gunakan geometry prosedural sederhana. Model eksternal, texture besar, dan post-processing tidak diperlukan untuk versi awal.

### Hero

- Satu scene dengan sculpture abstrak dan kamera perspektif.
- Rotasi idle lambat; pointer memengaruhi target rotasi dengan interpolasi.
- Gerak mengikuti waktu, bukan jumlah frame, agar kecepatan stabil.
- Pointer effect hanya aktif pada perangkat fine pointer dan tidak mencegah scroll touch.
- Canvas tidak menangkap klik CTA, tidak masuk tab order, dan diberi `aria-hidden="true"`.

### Projects

- Gunakan maksimal satu renderer Projects yang dipakai ulang untuk preview aktif, bukan renderer permanen per kartu.
- Aktifkan preview lewat pointer atau fokus keyboard; hentikan ketika kartu tidak aktif atau section keluar viewport.
- Pada mobile/coarse pointer, gunakan preview statis tanpa mewajibkan hover.
- Bila perpindahan canvas antar kartu terlalu kompleks, gunakan satu area preview bersama di section Projects. Prioritaskan implementasi paling sederhana yang tetap memenuhi interaksi.

### Performa dan lifecycle

- Maksimal dua renderer: satu Hero dan satu Projects.
- Batasi device pixel ratio maksimal 1.5 sebagai titik awal; turunkan bila hasil profiling memerlukan.
- Hindari shadow map, post-processing, dan texture besar pada versi awal.
- Target animasi lancar sekitar 60 fps desktop dan minimal sekitar 30 fps perangkat mobile pengujian; bukan jaminan untuk semua perangkat.
- Hentikan loop saat document tersembunyi atau scene keluar viewport.
- Resize mengikuti ukuran container dan memperbarui aspect camera.
- Cleanup meliputi animation loop, listener, observer, geometry, material, texture bila ada, dan renderer.
- Tangani kegagalan inisialisasi WebGL atau context loss dengan fallback; konten HTML harus tetap berfungsi.

## 5. Motion dan aksesibilitas

| Interaksi | Perilaku |
|---|---|
| Scroll reveal | Translasi 16–32px, opacity, durasi sekitar 400–700ms |
| Tombol | Pergeseran 2–4px dan perubahan shadow sekitar 120–180ms |
| Kartu | Lift kecil atau aksen preview, tanpa menggeser layout |
| Sculpture | Rotasi lambat dengan respons pointer terbatas |
| Marquee opsional | Gerak lambat, tombol pause jika berjalan terus lebih dari 5 detik |

- `prefers-reduced-motion: reduce` mematikan rotasi berkelanjutan, parallax, marquee, dan reveal bergerak; konten langsung terlihat dan preview statis tersedia.
- Animasi otomatis berkelanjutan harus punya kontrol pause yang dapat digunakan dengan keyboard.
- Jangan memakai scroll hijacking, custom cursor pengganti, kedipan cepat, atau kamera berputar tajam.
- Tanpa JavaScript, semua teks, link, dan konten inti tetap terlihat.
- Fokus keyboard tidak boleh dihilangkan. Dekorasi tidak boleh dibacakan sebagai konten.
- Tambahkan skip link bila belum tersedia.

## 6. Responsive

| Lebar | Aturan |
|---|---|
| Di bawah 640px | Satu kolom, headline menyusut, preview statis Projects, menu mobile |
| 640–1023px | Grid dua kolom bila ruang cukup, sculpture lebih ringkas |
| 1024px ke atas | Hero asimetris, proyek unggulan dominan, whitespace lebih luas |

Uji minimal pada lebar 320, 375, 768, 1024, dan 1440px. Tidak boleh ada overflow horizontal pada halaman; area dekoratif boleh terpotong di containernya sendiri.

## 7. Peta perubahan file

| File | Perubahan |
|---|---|
| `src/styles/global.css` | Token warna, tipografi, border, shadow, motion, reduced motion |
| `src/layouts/Layout.astro` | Aksesibilitas global dan reveal yang aman tanpa JavaScript |
| `src/components/Navbar.astro` | Navigasi brutalist dan state mobile |
| `src/components/Hero.astro` | Komposisi editorial dan sculpture |
| `src/components/About.astro` | Frame foto, bio, statistik |
| `src/components/Skills.astro` | Grid skill baru |
| `src/components/Projects.astro` | Layout proyek dan preview interaktif |
| `src/components/Experience.astro` | Timeline editorial |
| `src/components/Contact.astro` | Form dan link sosial |
| `src/components/Footer.astro` | Penutup dan branding |
| `src/components/SectionTitle.astro` | Heading section bersama |
| `src/components/ThemeToggle.astro` | Penyesuaian visual serta kontras |
| `package.json` dan lockfile | Dependency Three.js |

Komponen scene baru hanya dibuat bila diperlukan untuk memisahkan lifecycle WebGL dari markup. Jangan membuat lapisan abstraksi generik atau framework scene.

## 8. Urutan implementasi

1. Periksa git diff dan konten terbaru; catat perubahan pengguna yang harus dipertahankan.
2. Terapkan token visual, heading bersama, dan fondasi aksesibilitas.
3. Redesign Navbar dan Hero; tambahkan sculpture Three.js serta fallback.
4. Redesign About, Skills, Experience, dan Footer.
5. Redesign Projects dan tambahkan renderer preview yang dipakai ulang.
6. Redesign Contact tanpa mengklaim integrasi backend selesai.
7. Uji responsive, keyboard, theme, reduced motion, fallback, dan lifecycle.
8. Jalankan build serta lint/typecheck yang tersedia; review diff akhir.

## 9. Verifikasi dan kriteria selesai

### Pemeriksaan otomatis

- `npm run build` wajib berhasil.
- Pada pemeriksaan awal, package scripts belum menyediakan lint/typecheck. Periksa ulang saat implementasi; jangan mengklaim pemeriksaan tersebut lulus jika belum dijalankan.
- Tinggalkan satu pemeriksaan runnable sederhana untuk logika nontrivial yang diperkenalkan, tanpa menambah framework pengujian bila tidak perlu.
- Tidak ada error import atau akses browser API saat build.

### Pemeriksaan browser

- Semua section, anchor, CTA valid, dan menu mobile berfungsi.
- Tidak ada error console saat scene aktif, resize, berpindah fokus, atau berganti tab.
- Theme terang/gelap konsisten, preferensi tersimpan, kontras diperiksa.
- Keyboard dapat menjangkau navigasi, kontrol pause, proyek, dan form.
- Reduced motion, JavaScript nonaktif, dan WebGL tidak tersedia tetap menghasilkan halaman yang terbaca.
- Loop berhenti saat tab tersembunyi/scene keluar viewport dan resource dilepas saat teardown.
- Foto, bio, email, brand, dan proyek pengguna tidak hilang.
- Tidak ada klaim palsu bahwa screenshot, studi kasus, atau pengiriman form sudah tersedia.

### Definisi selesai

Redesign selesai ketika seluruh section memakai bahasa visual baru, Three.js Hero dan Projects berfungsi dengan fallback, verifikasi di atas sudah dilakukan, dan keterbatasan yang belum terselesaikan dicatat secara jelas. Build sukses saja tidak cukup untuk menyatakan pengujian visual atau performa selesai.

## 10. Status checklist

- [x] Arah brutalism disepakati.
- [x] Palet black, burgundy, white ditentukan.
- [x] Sculpture abstrak dipilih.
- [x] Three.js untuk Hero dan Projects dipilih.
- [x] Dokumen acuan dibuat.
- [x] Fondasi visual, responsive, fokus, dan status no-JavaScript diterapkan.
- [x] Semua section didesain ulang dengan konten personal dipertahankan.
- [x] Three.js Hero dan Projects diterapkan dengan fallback.
- [x] Lifecycle, reduced motion, pause, cleanup, dan Projects coarse-focus gate ditinjau lewat test/build.
- [x] Build dan test runnable berhasil.
- [ ] Pemeriksaan browser aktual, console, responsive, kontras visual, keyboard, reduced motion, no-JavaScript, WebGL fallback, dan performa masih pending; tooling browser lokal tidak ditemukan.
- [ ] Lint/typecheck masih pending; package scripts tidak menyediakan command tersebut.
