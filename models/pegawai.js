const mongoose = require('mongoose');

const PegawaiSchema = new mongoose.Schema({
    NIP: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    no_telepon: { type: Number, required: true }
});

module.exports = mongoose.model('Pegawai', PegawaiSchema);
