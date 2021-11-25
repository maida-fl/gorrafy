// const fs = require('fs');
// const path = require('path');


/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');
const sequelize = db.sequelize;
const Product = db.Product;
const Colour = db.Colour;
const Category = db.Category;
const ProductColour = db.ProductColour;

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
    agregar: (req, res) => {
        let promiseColours = Colour.findAll();
		let promiseCategories = Category.findAll();

		Promise.all([promiseColours, promiseCategories])
			.then(function([colours, categories]) {
			res.render('adminAgregar', {colours:colours, categories:categories});
			})
			.catch(error => res.send(error));
    },
	// (post) Create - Método para guardar la info

	// Ruta post de store manda a controller de admin pero luego hay que emprolijarlo cambiando ruta para acá
    store: (req, res) => {
		Product.create({
			name: req.body.productName,
		    price: req.body.price,
			description: req.body.productDescription,
			image: req.file.filename,
			id_category: req.body.productCategory
		})
		ProductColour.create({
			id_colour: req.body.productColour,	
			id_product: req.params.id
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