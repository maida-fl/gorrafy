const fs = require('fs');
const path = require('path');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productoController = {
    producto: (req, res) => {
        res.render('producto', {products: products});
    },
    listadoProducto: (req, res) => {
        res.render('listadoProductos', {products: products});
    }
};

module.exports = productoController;