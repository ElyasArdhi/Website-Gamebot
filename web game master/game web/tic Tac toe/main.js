// main.js

document.addEventListener("DOMContentLoaded", function () {
  const audioElement = new Audio("musik.mp3");
  audioElement.loop = true;
  audioElement.autoplay = true;

  // Fungsi untuk menghentikan musik
  function stopMusic() {
    audioElement.pause();
    audioElement.currentTime = 0;
  }

  // Panggil fungsi stopMusic saat halaman dimuat ulang atau ditutup
  window.addEventListener("beforeunload", stopMusic);

  // Panggil fungsi stopMusic saat pengguna meninggalkan halaman
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      stopMusic();
    }
  });
});