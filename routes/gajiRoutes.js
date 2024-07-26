const express = require('express');
const router = express.Router();
const gajiController = require('../controller/gajiController');
const { authenticate, authorize } = require('../middleware/auth');

router.post('/', authenticate, authorize(['admin']), gajiController.createGaji);
router.get('/:id', authenticate, authorize(['admin', 'pegawai']), gajiController.getGaji);
router.get('/', authenticate, authorize(['admin', 'pegawai']), gajiController.getAllGaji);
router.put('/:id', authenticate, authorize(['admin']), gajiController.updateGaji);
router.delete('/:id', authenticate, authorize(['admin']), gajiController.deleteGaji);

module.exports = router;
