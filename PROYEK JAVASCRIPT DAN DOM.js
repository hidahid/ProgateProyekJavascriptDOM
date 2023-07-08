// PROYEK JAVASCRIPT DAN DOM - FRONTEND BOOTCAMP PROGATE STEP 3

/*
- Ini adalah akhir dari LANGKAH ini
- Kita akan mencoba 2 latihan dan 1 proyek
- Untuk menguji pengetahuan JavaScript dan DOM yang telah dipelajari

*/

/*
==================================
===== LATIHAN MANIPULASI DOM =====
==================================
*/

/*
- Latihan pertama adalah mengembangkan program FizzBuzz
- Program menerima angka dan mengeluarkan hasil yang berbeda tergantung pada input angka
- Berikut adalah aturannya. Jika input angka adalah:

1. Kelipatan 3: Keluaran Fizz
2. Kelipatan 5: Keluaran Buzz
3. Keduanya kelipatan 3 dan kelipatan 5: Keluaran FizzBuzz
4. Kasus lain: Keluarkan nomor apa adanya

- Inilah yang akan kita kembangkan

1. Siapkan sebuah formulir untuk input sebuah angka
2. Tampilkan hasil angka FizzBuzz di formulir tersebut saat tombol diklik

- Saat angka 100 diberikan sebagai input pada formulir, Buzz! muncul sesuai yang diharapkan
- Begitu juga halnya jika angka selain 89 yang dilakukan input pada formulir ini
- Terakhir, tambahkan fitur memvalidasi input
- Dan output "invalid input" ketika 0 atau nilai tidak valid lainnya digunakan
- Ini adalah praktik yang terbaik dari logika JavaScript dan DOM!

*/

// *
// *
// *

/*
==================================
===== LATIHAN ELEMEN DINAMIS =====
==================================
*/

/*
- Mari kita juga menerapkan element animasi dan element dinamis
- Ke website yang telah dikembangkan pada LANGKAH sebelumnya
- Inilah yang perlu ditambahkan!

1. Tingkatkan jumlah gambar dan gunakan slider untuk menampilkannya
2. Saat gambar diklik, tampilkan popup sehingga dapat terlihat deskripsi tentang gambar tersebut
3. Dalam formulir, tampilkan pesan kesalahan jika nilai yang salah dimasukkan
4. Tambahkan bagian FAQ dan gunakan accordion untuk menunjukkan jawabannya

*/

// *
// *
// *

/*
===========================================
===== PROYEK AKHIR JAVASCRIPT DAN DOM =====
===========================================
*/

/*
- Hebat! kamu sudah sampai ketahap proyek yang lebih menantang
- Kali ini aku tidak akan memberimu proyek baru
- Tetapi melanjutkan proyek sebelumnya yang ada pada materi HTML dan CSS

- Pada proyek sebelumnya, kamu telah membuat websie multi-page
- Proyek tersebut belum selesai
- Kamu perlu menambahkan beberapa bagian baru yang lebih menarik
- Menggunakan elemen dinamis dengan memanfaatkan Manipulasi DOM dan Javascript
- Ini adalah beberapa bagian yang akan dibuat dengan itu:

1. Active State pada Navbar

- Untuk menentukan state active pada setiap menu
- Kamu dapat menggunakan url dari halaman saat ini
- Misalnya, jika url halaman saat ini adalah /products
- Kamu dapat menambahkan state active pada link Products yang terdapat pada menu

- Aku akan memberimu informasi tambahan
- Mengenai cara untuk mendapatkan URL saat ini melalui "Window Object"
- Window Object mewakili window pada browser
- Semua object, function, dan variable JavaScript global
- Secara otomatis menjadi anggota dari Window Object

- Seperti yang kamu lihat, kamu dapat mengakses Window Object di console
- Dan melihat nilai dari property "document" dan "location"
- Bagian dari document yang kamu gunakan document.getElementById atau metode lain
- Sebenarnya merupakan salah satu element dari Window Object
- Dan disana juga terdapat property location untuk informasi mengenai halaman saat ini


2. Sidebar dan FIlter produk yang akan ditamplilkan berdasarkan kategori

- Jangan gunakan halaman yang berbeda untuk memisahkan setiap produk
- Kamu dapat menggunakan query dari url untuk menentukan produk yang akan ditampilkan
- Berikut adalah contoh url untuk setiap kategori:
    - /product?q=coffee
    - /product?q=non-coffee
    - /product?q=tea
- Bagian setelah ? disebut sebagai URL query parameters dan kamu juga dapat mengambil nilai parameter melalui Window Object
- Dengan cara ini, orang dapat beralih kategori tanpa memuat ulang browser
- Karena mereka tidak harus membuka URL yang berbeda
- Ini pasti akan meningkatkan UX situs web kamu


3. Accordion pada footer

4. (Jika kamu belum menyelesaikan ini) CSS Animation saat scroll halaman dari atas

- Aku dapat menggunakan state dan class "active" pada element yang di klik
- Jika element tidak aktif maka aku hanya perlu mengapus class "active" dari element tersebut
- Cobalah untuk membuat bagian lainnya dengan mengunakan CSS, Javascript dan manipulasi DOM

*/
