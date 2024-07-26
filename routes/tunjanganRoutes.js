const express = require('express');
const router = express.Router();
const tunjanganController = require('../controller/tunjanganController');
const { authenticate, authorize } = require('../middleware/auth');

router.post('/', authenticate, authorize(['admin']), tunjanganController.createTunjangan);
router.get('/', authenticate, authorize(['admin']),tunjanganController.getAllTunjangan);
router.get('/:id', authenticate, authorize(['admin', 'pegawai']), tunjanganController.getTunjangan);
router.put('/:id', authenticate, authorize(['admin']), tunjanganController.updateTunjangan);
router.delete('/:id', authenticate, authorize(['admin']), tunjanganController.deleteTunjangan);

module.exports = router;
