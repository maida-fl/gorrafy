const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const adminController = {
    admin: (req, res) => {
        res.render('admin');
    },
    agregar: (req, res) => {
        res.render('adminAgregar');
    },
    // POST para agregar producto y almacenarlo
    store: (req, res) => {
        const newProduct = {
			id: products[products.length - 1].id +1,
			name: req.body.productName,
		    price: req.body.price,
			category: req.body.productCategory,
			description: req.body.productDescription,
            colour: [req.body.productColour],
			image: req.file.filename 
		}
		products.push(newProduct);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/producto");

    }

};

module.exports = adminController;