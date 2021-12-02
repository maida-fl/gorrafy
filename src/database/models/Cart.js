module.exports = (sequelize, dataTypes) => {
    const Cart = sequelize.define('Cart', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        totalPrice: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    },{
        tableName: 'carts',
        timestamps: false
    })

    Cart.associate = function(models) {
        Cart.belongsTo (models.User, {
            as: "user",
            foreignKey: "id_user"
        })

        Cart.belongsToMany (models.Product, {
            as: "products",
            through: "cart_product",
            foreignKey: "id_cart",
            otherKey: "id_product",
            timestamps: false
        })
    }

    
    return Cart;
}