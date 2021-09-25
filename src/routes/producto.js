// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productoController = require('../controllers/productoController');

// ************ Routes ************
router.get('/', productoController.producto)



module.exports = router;