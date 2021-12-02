module.exports = (sequelize, dataTypes) => {
    const CartProduct = sequelize.define('CartProduct', {
        id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        id_cart: {
            type: dataTypes.INTEGER
        },
        id_product: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'cart_product',
        timestamps: false
    })  

    return CartProduct;
}
