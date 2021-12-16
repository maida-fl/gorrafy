const { body } = require('express-validator');
const validateLogin = [
    body('email')
        .notEmpty().withMessage('Tienes que ingresar tu correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password')
		.notEmpty().withMessage('Tienes que ingresar tu contraseña')   
]

module.exports = validateLogin;