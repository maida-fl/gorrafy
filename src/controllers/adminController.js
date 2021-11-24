// const fs = require('fs');
// const path = require('path');

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');
const sequelize = db.sequelize;
const Product = db.Product;
const Colour = db.Colour;
const Category = db.Category;

const adminController = {
    admin: (req, res) => {
        res.render('admin');
    },
	// agregar: (req, res) => {
    //     Colour.findAll()
	// 	.then(function(colours) {
	// 		res.render('adminAgregar', {colours:colours})
	// 	})
	// 	.catch(error => res.send(error));
    // },
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
		Product.create({
			name: req.body.productName,
		    price: req.body.price,
			description: req.body.productDescription,
            colour: req.body.productColour,
			image: req.file.filename,
			id_category: req.body.productCategory,
			id_product: req.params.id
		})
		.then(function(){
			res.redirect('/producto')
		})
	}

};

module.exports = adminController;