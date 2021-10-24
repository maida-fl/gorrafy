// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const userController = require('../controllers/userController');

//**************Middleware*****************
const uploadFile = require('../middlewares/multerMiddleware');

// ************ Routes ************
router.get('/register', userController.register)
router.post('/register', uploadFile.single("image"), userController.processRegister)
router.get('/login', userController.login)




module.exports = router;