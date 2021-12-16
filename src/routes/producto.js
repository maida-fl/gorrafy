// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const validationsEditProduct = require('../middlewares/validateEditProduct');
const uploadFile = require('../middlewares/multerMiddleware');

// ************ Controller Require ************
const productoController = require('../controllers/productoController');

// ************ Routes ************
router.get('/', productoController.listadoProducto)

router.get('/result', productoController.search)

router.get('/detalle/:id', productoController.detail)

router.get('/edit/:id', productoController.edit)

router.put('/edit/:id', uploadFile.single("productImage"), validationsEditProduct, productoController.update)

router.delete('/delete/:id', productoController.destroy)

module.exports = router;
