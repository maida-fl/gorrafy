// ************ Require's ************
const express = require('express');
const router = express.Router();
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegister');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



// ************ Controller Require ************
const userController = require('../controllers/userController');

// ************ Routes ************

// Formulario de Register
router.get('/register',guestMiddleware, userController.register)
// Procesar el register
router.post('/register', uploadFile.single('avatar'), validations, userController.processRegister)

// Formulario de Login
router.get('/login', guestMiddleware, userController.login)
// Procesar el Login
router.post('/login', userController.processLogin)

router.get('/profile/:id',authMiddleware, userController.profile)

// Logout
router.get('/logout', userController.logout);

// Update

router.get('/update/:id', userController.update)
router.put('/update/:id', uploadFile.single('avatar'), userController.processUpdate)




module.exports = router;