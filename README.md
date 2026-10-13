# Mata Hati Cafe — Website Multi-page

Website statis responsif menggunakan HTML, CSS, dan JavaScript murni. Tidak memerlukan npm, framework, database, atau proses build.

## Halaman
- `index.html` — Beranda dan ajakan berkunjung
- `menu.html` — Kategori dan pilihan menu minuman, makanan, dan camilan dengan filter
- `galeri.html` — Galeri suasana
- `tentang.html` — Cerita dan pengalaman kafe
- `kunjungi.html` — Lokasi, peta, kontak, dan formulir pertanyaan reservasi ke WhatsApp
- `assets/style.css` — Gaya visual bersama dan responsif
- `assets/script.js` — Menu mobile, animasi scroll, filter menu, dan formulir WhatsApp

## Cara menjalankan
1. Ekstrak ZIP.
2. Pastikan seluruh file HTML tetap satu folder bersama folder `assets`.
3. Buka `index.html` melalui browser, atau buka folder di VS Code.

## Catatan akurasi sebelum dipublikasikan
- Foto saat ini adalah foto ilustrasi dari Unsplash, bukan dokumentasi resmi kafe. Ganti dengan foto asli yang diizinkan pihak kafe.
- Nama beberapa menu dirangkum dari publikasi kuliner yang tersedia secara publik; daftar ketersediaan dan komposisi bisa berubah. Konfirmasikan langsung ke kafe.
- Harga tidak ditampilkan sebagai harga resmi karena daftar harga terbaru belum terverifikasi. Tombol pada menu mengarahkan pengunjung untuk meminta daftar terbaru via WhatsApp.
- Alamat, jam operasional, rating, nomor telepon, Instagram, dan peta diambil dari listing publik yang tersedia saat pembuatan. Verifikasi dengan pihak kafe sebelum dipublikasikan.
- Form reservasi menyiapkan pesan WhatsApp; ini bukan booking otomatis. Reservasi berlaku setelah dikonfirmasi pihak kafe.

## Deploy ke GitHub Pages
1. Unggah seluruh isi folder ini ke root repository GitHub. Jangan hanya mengunggah `index.html`; sertakan semua file HTML dan folder `assets`.
2. Buka **Settings → Pages**.
3. Pilih deploy dari branch `main`, folder `/ (root)`, lalu simpan.
4. Setelah proses deploy selesai, buka URL GitHub Pages yang diberikan.

## Deploy ke Vercel
Import repository GitHub ke Vercel. Pilih preset `Other`, tanpa build command dan tanpa output directory khusus, lalu deploy.
