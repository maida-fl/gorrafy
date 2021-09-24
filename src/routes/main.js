// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// ************ Routes ************
router.get('/', mainController.index)
router.get('/producto', mainController.producto)
router.get('/register', mainController.register)
router.get('/login', mainController.login)
router.get('/compra', mainController.compra)



module.exports = router;