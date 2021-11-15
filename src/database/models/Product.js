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
        },
        id_colour: {
            type: dataTypes.INTEGER
        },  
    }, {
        tableName: 'products',
        timestamps: false //Se agrego esta linea 13-nov
        // paranoid: true,
        // deletedAt: "softDelete", 
        // createdAt: "created_at", //estan bien? en el diagrama no incluimos marcas temporales
        // updatedAt: "updated_at"  //estan bien? en el diagrama no incluimos marcas temporales
    })

    Product.associate = function(models){
 
        Product.belongsTo(models.Colour, {
            as: "colours",
            foreignKey: "id_colour"
        })

        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "id_category"
        })
    }  
    
    return Product;
}

