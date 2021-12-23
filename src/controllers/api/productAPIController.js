
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
            
            /* categoriesNames = [Gorras, Indumentaria, Accesorios, ...] */
            let categoriesNames = []
            /* categoriesCount = [1, 4, 6, ...] */
            let categoriesCount = []
            categoriesToSend.forEach((category) => {
                categoriesNames.push(category.category);
                categoriesCount.push(0)
            })
        
            productsToSend.forEach((product) => {
                categoriesCount[product.categories.id - 1] = categoriesCount[product.categories.id - 1] + 1
            })

            let countByCategoryToSend = {};
            for (let i = 0; i < categoriesNames.length; i++) {
                countByCategoryToSend[categoriesNames[i]] = categoriesCount[i];
            }


            productsToSend.forEach((product) => {
                // Para acceder al product/:id
                product.detailURL = `api/productos/${product.id}`
            })

            return res.status(200).json({
                meta: [
                    {count: products.length,
                    countByCategory: countByCategoryToSend,
                    categoriesCount: categoriesToSend.length,
                    status: 200}
                ],
                data: products
            })
        })
        .catch(error => {console.log(error)});
    }
}

module.exports = productAPIController;