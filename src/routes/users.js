// ************ Require's ************
const express = require('express');
const router = express.Router();
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegister');

// ************ Controller Require ************
const userController = require('../controllers/userController');

// ************ Routes ************

// Formulario de Register
router.get('/register', userController.register)
// Procesar el register
router.post('/register', uploadFile.single('avatar'), validations, userController.processRegister)

// Formulario de Login
router.get('/login', userController.login)
// Procesar el Login
router.post('/login', userController.processLogin)

router.get('/profile', userController.profile)




module.exports = router;