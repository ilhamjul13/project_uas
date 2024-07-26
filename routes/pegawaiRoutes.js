const express = require('express');
const router = express.Router();
const pegawaiController = require('../controller/pegawaiController');
const { authenticate, authorize } = require('../middleware/auth');

// CRUD routes for Pegawai
router.post('/', authenticate, authorize(['admin']), pegawaiController.createPegawai);
router.get('/:id', authenticate, authorize(['admin', 'pegawai']), pegawaiController.getPegawai);
router.get('/', authenticate, authorize(['admin', 'pegawai']), pegawaiController.getAllPegawai);
router.put('/:id', authenticate, authorize(['admin']), pegawaiController.updatePegawai);
router.delete('/:id', authenticate, authorize(['admin']), pegawaiController.deletePegawai);

module.exports = router;
