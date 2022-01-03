const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userAPIController.js');

//Rutas
//Listado de usuarios
router.get('/', userAPIController.list);
router.get('/:id', userAPIController.detail);


module.exports = router;