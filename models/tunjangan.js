const mongoose = require('mongoose');

const TunjanganSchema = new mongoose.Schema({
    bonus: { type: Number, required: true },
    uang_saku: { type: Number, required: true },
    lembur: { type: Number, required: true }
});

module.exports = mongoose.model('Tunjangan', TunjanganSchema);
