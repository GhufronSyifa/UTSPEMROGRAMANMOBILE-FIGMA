const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk melayani file statis dari direktori 'images'
app.use('/images', express.static('images'));

app.use(express.json());

// Dummy data produk
const products = [
  {
    id: 1,
    name: 'Kursi Andrea',
    description: 'Kursi tamu minimalis andrea ini adalah salah satu koleksi Sofa dan Kursi Tamu dari jepara. Produk Mebel Ruang Tamu yang di produksi oleh PerusahaanKami ini di buat dari bahan Kayu Jati pilihan.',
    price: 3700000,
    image: '/images/Kursi_Minimalis_Andrea.png' // URL gambar
  },
  {
    id: 2,
    name: 'Kursi Malas',
    description: 'Kursi malas ini nyaman untuk bersantai.',
    price: 3000000,
    image: '/images/Kursi_Malas_Jati.png' // URL gambar
  },
  {
    id: 3,
    name: 'Meja Rak File',
    description: 'Meja rak file ini cocok untuk ruang kerja Anda.',
    price: 5600000,
    image: '/images/Meja_Rak_File.png' // URL gambar
  }
];

// Endpoint untuk mendapatkan semua produk
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Endpoint untuk mendapatkan detail produk berdasarkan ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produk tidak ditemukan' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});