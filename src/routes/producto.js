// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const productoController = require('../controllers/productoController');

// ************ Multer ************
const storage = multer.diskStorage({ 
    destination: function (req, res, cb) {
       cb(null, './src/public/img');
    },
    filename: function (req, file, cb) {
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
    
})

const upload = multer({storage: storage});

// ************ Routes ************
router.get('/', productoController.listadoProducto)
router.get('/detalle/:id', productoController.detail)
router.get('/edit/:id', productoController.edit)
router.put('/edit/:id', upload.single("productImage"), productoController.update)


module.exports = router;