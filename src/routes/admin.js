// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

// ************ Routes ************


router.get('/', adminController.admin)
router.get('/editar', adminController.editar)
router.get('/agregar', adminController.agregar)



module.exports = router;