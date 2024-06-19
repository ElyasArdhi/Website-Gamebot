// JavaScript untuk Galeri Gambar
let currentImageIndex = 0;
const images = document.querySelectorAll('.app-screenshot');
const totalImages = images.length;

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].style.display = 'block';
}

function showPreviousImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    images[currentImageIndex].style.display = 'block';
}

// Tambahkan event listener untuk tombol navigasi galeri jika ada
document.getElementById('nextButton').addEventListener('click', showNextImage);
document.getElementById('prevButton').addEventListener('click', showPreviousImage);

// JavaScript untuk Informasi Pembaruan
// Misalnya, Anda ingin menampilkan informasi pembaruan terbaru dari sebuah API atau file JSON
// Ini adalah contoh sederhana menggunakan data statis
const updateInfo = {
    version: '2.0',
    date: '2024-06-12',
    changes: [
        'Penambahan fitur baru',
        'Perbaikan bug',
        'Peningkatan performa aplikasi'
    ]
};

function displayUpdateInfo(info) {
    const updatesElement = document.querySelector('.app-updates');
    updatesElement.innerHTML = `<h2>Informasi Pembaruan</h2>
                                <p>Versi: ${info.version}</p>
                                <p>Tanggal: ${info.date}</p>
                                <ul>
                                    ${info.changes.map(change => `<li>${change}</li>`).join('')}
                                </ul>`;
}

// Panggil fungsi ini saat halaman dimuat atau ketika Anda ingin memperbarui informasi
displayUpdateInfo(updateInfo);

// JavaScript untuk Tombol Download
document.getElementById('downloadButton').addEventListener('click', function() {
    // Fungsi untuk mendownload file
    window.location.href = '1.jpg';
});