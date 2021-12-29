const path = require("path");
const { body } = require('express-validator');
const validateAddProduct = [
    body('productName')
        .notEmpty().withMessage('Tienes que escribir el nombre del producto').bail()
		.isLength({min: 5}).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    body('price')
		.notEmpty().withMessage('Tienes que escribir el precio'),
    body('productDescription')
        .notEmpty().withMessage('Tienes que escribir una descripción')
        .isLength({min: 20}).withMessage('La descripción debe tener al menos 20 caracteres'),      
    body('productCategory')
		.notEmpty().withMessage('Tienes que elegir la categoría'),
    body('productColour')
        .notEmpty().withMessage('Tienes que elegir el color'),  
    body('productImage').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        console.log(file.originalname);

        return true;
    })  
]

module.exports = validateAddProduct;