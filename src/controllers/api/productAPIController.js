
const db = require('../../database/models');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Product = db.Product;



const productAPIController = {
    'list': (req, res) => {
        let products = db.Product.findAll({
            include: ['categories']
        })
        let categories = db.Category.findAll()
        Promise.all([products, categories]).then(([products, categories]) => {

            let productsToSend = products.map((product) => {
                return product.dataValues;
            })

            let categoriesToSend = categories.map((category) => {
                return category.dataValues;
            })

            let categoriesNames = []
            let categoriesCount = []
            categoriesToSend.forEach((category) => {
                categoriesNames.push(category.category);
                categoriesCount.push(0)
            })
            /* categoriesNames = [Camperas, Tops, Accesorios, ...] */
        
            productsToSend.forEach((product) => {
                categoriesCount[product.categories.id - 1] = categoriesCount[product.categories.id - 1] + 1
            })
            /* categoriesCount = [4, 5, 8, ...] */

            let countByCategoryToSend = {};
            for (let i = 0; i < categoriesNames.length; i++) {
                countByCategoryToSend[categoriesNames[i]] = categoriesCount[i];
            }
            /* countByCategoryToSend = {
                Camperas: 4,
                Tops: 5,
                Accesorios: 8,
                ...
            }*/
            
            productsToSend.forEach((product) => {
                // // Agregamos los campos por los que se relaciona con otras tablas
                // product.dbRelations = ["sizeId", "categoryId"];
                // Agregamos la URL para ir al endpoint de cada producto en particular
                product.detailURL = `api/productos/${product.id}`
            })

            return res.status(200).json({
                meta: {
                    count: products.length,
                    countByCategory: countByCategoryToSend,
                    categoriesCount: categoriesToSend.length,
                    status: 200
                },
                data: products
            })
        })
        .catch(error => {console.log(error)});
    }
}

module.exports = productAPIController;