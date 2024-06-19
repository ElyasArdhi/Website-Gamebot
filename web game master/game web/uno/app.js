// Mengambil elemen gambar bor.png
var borImg = document.getElementById('bor-img');

// Menunggu 2 detik
setTimeout(function() {
    // Sembunyikan gambar bor.png
    borImg.style.display = 'none';
    
    // Tampilkan elemen-elemen permainan UNO
    document.querySelectorAll('.play-area, .player-box, .cpu-box, .color-picker').forEach(function(elem) {
        elem.style.display = 'block';
    });
}, 2000);