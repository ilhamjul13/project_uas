const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


// Tambahkan log ini untuk memverifikasi bahwa variabel lingkungan dimuat dengan benar
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

const akunRoutes = require('./routes/akunRoutes');
const adminRoutes = require('./routes/adminRoutes');
const pegawaiRoutes = require('./routes/pegawaiRoutes');
const gajiRoutes = require('./routes/gajiRoutes');
const tunjanganRoutes = require('./routes/tunjanganRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/akun', akunRoutes);
app.use('/admin', adminRoutes);
app.use('/pegawai', pegawaiRoutes);
app.use('/gaji', gajiRoutes);
app.use('/tunjangan', tunjanganRoutes);

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://IlhamZul:ALST3vUl6e0QkPua@cluster0.lptggxk.mongodb.net/anna?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Terhubung ke MongoDB'))
  .catch(err => {
    console.error('Kesalahan koneksi', err);
    process.exit(1);
  });

// Mulai server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});