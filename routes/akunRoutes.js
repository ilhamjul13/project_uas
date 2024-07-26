const express = require('express');
const router = express.Router();
const akunController = require('../controller/akunController');
const { authenticate, authorize } = require('../middleware/auth');

router.post('/register', akunController.register);
router.post('/login', akunController.login);

// Example of a protected route
router.get('/admin/protected', authenticate, authorize(['admin']), (req, res) => {
  res.send('This is a protected route for admin');
});

router.get('/pegawai/protected', authenticate, authorize(['pegawai']), (req, res) => {
  res.send('This is a protected route for pegawai');
});

module.exports = router;
