// const fs = require('fs');
// const path = require('path');


/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');
const sequelize = db.sequelize;
const Product = db.Product;

const productoController = {
    listadoProducto: (req, res) => {
        Product.findAll({
			include:[{association:'categories'}, {association:'colours'}]
		})
		.then(function(products) {
			res.render('listadoProductos', {products:products})
		})
		.catch(error => res.send(error));
    },
    detail: (req, res) => {
		Product.findByPk(req.params.id, {
			include:[{association:'categories'}, {association:'colours'}]
		})
			.then(function(product) {
				res.render('producto', {product: product, colours: product.colours})
			})
			.catch(error => res.send(error));
	},
    // (get) Create - Formulario para crear
	create: (req, res) => {
		res.render('product-create-form');
	},
	// (post) Create - Método para guardar la info
	store: (req, res) => {
		Product.create({
			name: req.body.productName,
		    price: req.body.price,
			category: req.body.productCategory,
			description: req.body.productDescription,
            colour: req.body.productColour,
			image: req.file.filename 
		})
		.then(function(){
			res.redirect('/producto')
		})
		.catch(error => res.send(error));
	},

	// (get) Update - Formulario para editar
	edit: (req, res) => {
		Product.findByPk(req.params.id)
			.then(Product => {
				res.render('adminEditar', {Product})
			})
			.catch(error => res.send(error));
	},
	// (post) Update - Método para actualizar la info
	update: (req, res) => {

		Product.update({
			name: req.body.productName,
		    price: req.body.price,
			category: req.body.productCategory,
			description: req.body.productDescription,
            colour: req.body.productColour,
			image: req.file.filename 
		},
		{where: {id: req.params.id}})
		.then(function(){
			res.redirect('/producto/detalle/' + req.params.id)
		})
		.catch(error => res.send(error));
	},
	// (delete) Delete - Eliminar un producto de la DB
	destroy : (req, res) => {
		Product.destroy({where: {id: req.params.id}})
			.then(() => {
				return res.redirect('/producto')
			})
			.catch(error => res.send(error));
	}
};

module.exports = productoController;