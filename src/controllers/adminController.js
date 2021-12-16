// const fs = require('fs');
// const path = require('path');

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');
const {
	validationResult
} = require('express-validator');
const sequelize = db.sequelize;
const Product = db.Product;
const Colour = db.Colour;
const Category = db.Category;
const ProductColour = db.ProductColour;

const adminController = {
    admin: (req, res) => {
        res.render('admin');
    },
    agregar: (req, res) => {
        let promiseColours = Colour.findAll();
		let promiseCategories = Category.findAll();

		Promise.all([promiseColours, promiseCategories])
			.then(function([colours, categories]) {
			res.render('adminAgregar', {colours:colours, categories:categories});
			})
			.catch(error => res.send(error));
    },

    // POST para agregar producto y almacenarlo
    store: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			let promiseColours = Colour.findAll();
			let promiseCategories = Category.findAll();
	
			Promise.all([promiseColours, promiseCategories])
				.then(function([colours, categories]) {
				res.render('adminAgregar', {colours:colours, categories:categories, errors: resultValidation.mapped()});
				})
				.catch(error => res.send(error));
		} else {
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
			
			

		}
	}

};

module.exports = adminController;