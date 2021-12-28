// const fs = require('fs');
// const path = require('path');


/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const {
	validationResult
} = require('express-validator');
const Product = db.Product;
const Colour = db.Colour;
const Category = db.Category;
const ProductColour = db.ProductColour;

const productoController = {
    listadoProducto: (req, res) => {
		let promiseProducts = Product.findAll({
			include:[{association:'categories'}, {association:'colours'}]
		});
		let promiseCategories = Category.findAll();

		Promise.all([promiseProducts, promiseCategories])
			.then(function([products, categories]) {
			res.render('listadoProductos', {products:products, categories:categories});
			})
			.catch(error => res.send(error));
    },
    detail: (req, res) => {
		Product.findByPk(req.params.id, {
			include:[{association:'categories'}, {association:'colours'}],
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
		.then(function(newProduct){
			req.body.productColour.forEach(idColour => {
				ProductColour.create({
					id_colour: idColour,	
					id_product: newProduct.id,
				})
			});
			res.redirect('/producto')

		})

		.catch(error => res.send(error));
		
	},

	// (get) Update - Formulario para editar
	edit: (req, res) => {
		let promiseColours = Colour.findAll();
		let promiseCategories = Category.findAll();
		let promiseProduct = Product.findByPk(req.params.id);

		Promise.all([promiseColours, promiseCategories, promiseProduct])
			.then(function([colours, categories, Product]) {
			res.render('adminEditar', {colours:colours, categories:categories, Product:Product});
			})
			.catch(error => res.send(error));
	},
	// (post) Update - Método para actualizar la info
	update: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			let promiseColours = Colour.findAll();
			let promiseCategories = Category.findAll();
			let promiseProduct = Product.findByPk(req.params.id);
	
			Promise.all([promiseColours, promiseCategories, promiseProduct])
				.then(function([colours, categories, Product]) {
				res.render('adminEditar', {colours:colours, categories:categories, Product:Product, errors: resultValidation.mapped()});
				})
				.catch(error => res.send(error));
		} else {
			Product.findByPk(req.params.id)
				.then(function(product){
					Product.update({
						name: req.body.productName,
						price: req.body.price,
						description: req.body.productDescription,
						image: req.file ? req.file.filename : product.image, // si no se agrega imagen, se mantiene la imagen ya existente en la db
						id_category: req.body.productCategory
					},{where: {id: req.params.id}})	
				})

				// borramos los registros de asociación entre producto y color de la tabla intermedia ProductColour
				.then(function(){
					ProductColour.destroy({where: {id_product: req.params.id}})
				})

				// creamos nuevos registros en ProductColour
				.then(function(){
					// res.send(typeof req.body.productColour);
					if(typeof req.body.productColour === 'string') {
						ProductColour.create({
							id_colour: req.body.productColour,	
							id_product: req.params.id,
						})
						.catch(error => res.send(error));	
					} else {
						req.body.productColour.forEach(idColour => {
							ProductColour.create({
								id_colour: idColour,	
								id_product: req.params.id,
							})
						});		
					}
					res.redirect('/producto');
				})
				.catch(error => res.send(error));
		}		
	},
	// (delete) Delete - Eliminar un producto de la DB
	destroy : (req, res) => {
		Product.destroy({where: {id: req.params.id}})
			.then(() => {
				return res.redirect('/producto')
			})
			.catch(error => res.send(error));
	},
	search: (req, res) => {
        let search = req.query.search

		let promiseProducts = Product.findAll({
            where: {name: {[Op.like]: `%${req.query.search}%`}},
            include: [{association: "categories"}, {association: "colours"}
            ], order: [
                ['id', 'DESC']
        ]
        });

		let promiseCategories = Category.findAll();

		Promise.all([promiseProducts, promiseCategories])
			.then(function([products, categories]) {
			res.render('productResult', {products:products,search, categories:categories});
			})
			.catch(error => res.send(error));
    },
	categories: (req,res) => {
		let promiseProducts = Product.findAll({
            where: {id_category: req.params.id},
            include: [{association: "categories"}, {association: "colours"}
            ]
        });
		let promiseCategories = Category.findAll();

		Promise.all([promiseProducts, promiseCategories])
			.then(function([products, categories]) {
			res.render('productCategories', {products:products, categories:categories});
			})
			.catch(error => res.send(error));

	}
};

module.exports = productoController;