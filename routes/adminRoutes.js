const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');
const { authenticate, authorize } = require('../middleware/auth');

// Create a new admin
router.post('/admin', authenticate, authorize(['admin']), adminController.createAdmin);

// Login admin
router.post('/admin/login', adminController.login);

// Get admin by ID
router.get('/admin/:id', authenticate, authorize(['admin']), adminController.getAdmin);

// Update admin by ID
router.put('/admin/:id', authenticate, authorize(['admin']), adminController.updateAdmin);

// Delete admin by ID
router.delete('/admin/:id', authenticate, authorize(['admin']), adminController.deleteAdmin);

module.exports = router;
