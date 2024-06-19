const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const directoryPath = path.join(__dirname, '/'); // Ganti dengan path direktori yang Anda inginkan

// Middleware untuk melayani file statis
app.use(express.static(directoryPath));

// Middleware untuk melayani indeks HTML pada root
app.get('/', (req, res) => {
  res.sendFile(path.join(directoryPath, 'index.html'));
});

// Endpoint untuk mendapatkan daftar semua file dan direktori
app.get('/files', (req, res) => {
  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server Error');
    }
    const fileList = files.map(file => {
      return { name: file.name, type: file.isDirectory() ? 'directory' : 'file' };
    });
    res.json(fileList);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
