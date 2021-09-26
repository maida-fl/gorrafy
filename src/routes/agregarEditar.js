// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const agregarEditarController = require('../controllers/agregarEditarController');

// ************ Routes ************


router.get('/', agregarEditarController.admin)
router.get('/editar', agregarEditarController.editar)
router.get('/agregar', agregarEditarController.agregar)



module.exports = router;