// ************ Require's ************
const express = require('express');
const router = express.Router();
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegister');

// ************ Controller Require ************
const userController = require('../controllers/userController');

// ************ Routes ************
router.get('/register', userController.register)
router.post('/register', uploadFile.single('avatar'), validations, userController.processRegister)


router.get('/login', userController.login)




module.exports = router;