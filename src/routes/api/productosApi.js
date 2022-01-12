const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productAPIController.js');

//Rutas
//Listado de productos
router.get('/', productAPIController.list);
router.get('/last', productAPIController.lastProduct);
router.get('/:id', productAPIController.detail);


module.exports = router;