const mongoose = require('mongoose');

const GajiSchema = new mongoose.Schema({
    nama: { type: String, required: true },
    NIP: { type: String, required: true },
    tipe_pembayaran: { type: String, required: true },
    jumlah_gaji: { type: Number, required: true },
    durasi: { type: Date, required: true },
    total_hutang: { type: Number, required: true },
    jumlah_per_hari: { type: Number, required: true }
});

module.exports = mongoose.model('Gaji', GajiSchema);
