module.exports = (sequelize, dataTypes) => {
    const ProductColour = sequelize.define('ProductColour', {
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
        id_colour: {
            type: dataTypes.INTEGER
        },
        id_product: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'product_colour',
        timestamps: false
        // paranoid: true,
        // deletedAt: "softDelete",
        // createdAt: "created_at",
        // updatedAt: "updated_at"
    })  



    
    return ProductColour;
}
