const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userAPIController.js');

//Rutas
//Listado de usuarios
router.get('/', userAPIController.list);


module.exports = router;