module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING.BINARY
        },
        id_category: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'products',
        paranoid: true,
        deletedAt: "softDelete",
        createdAt: "created_at",
        updatedAt: "updated_at"
      })

    Product.associate = function(models){
 
        Product.belongsToMany(models.Colour, {
            as: "colours",
            through: "product_colour",
            foreignKey: "id_colour",
            otherKey: "id_product",
            timestamps: false
        })

        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "id_category"
        })
    }  
    
    return Product;
}

