const express = require('express');
const router = express.Router();
const gajiController = require('../controller/gajiController');
const { authenticate, authorize } = require('../middleware/auth');
//authenticate ini adalah middleware yang biasanya digunakan untuk memverifikasi identitas pengguna yang membuat permintaan. 
//Middleware ini akan memeriksa apakah permintaan datang dari pengguna yang terautentikasi (misalnya, dengan memeriksa token otentikasi dalam header permintaan).
//Jika autentikasi gagal, permintaan akan dihentikan dan pengguna akan menerima respons kesalahan.
//authorize(['admin']) Ini adalah middleware lain yang digunakan untuk memeriksa apakah pengguna yang telah diautentikasi memiliki izin yang sesuai untuk mengakses sumber daya. 
//Dalam hal ini, middleware ini memeriksa apakah pengguna memiliki hak akses yang terkait dengan peran 'dpa'. 
//Biasanya, fungsi authorize akan memeriksa peran atau hak akses pengguna yang sudah diautentikasi dan membandingkannya dengan hak akses yang diperlukan untuk melakukan tindakan ini. 
//Jika pengguna tidak memiliki izin yang diperlukan, permintaan akan dihentikan, dan pengguna akan menerima respons kesalahan.
router.post('/', authenticate, authorize(['admin']), gajiController.createGaji);
router.get('/:id', authenticate, authorize(['admin', 'pegawai']), gajiController.getGaji);
router.get('/', authenticate, authorize(['admin', 'pegawai']), gajiController.getAllGaji);
router.put('/:id', authenticate, authorize(['admin']), gajiController.updateGaji);
router.delete('/:id', authenticate, authorize(['admin']), gajiController.deleteGaji);

module.exports = router;
