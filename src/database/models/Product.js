module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define('Products', {
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
 /*       id_category: {
            type: dataTypes.INTEGER
        },
        id_colour: {
            type: dataTypes.INTEGER
        },*/   
    }, {
        tableName: 'products',
        timestamps: true, //Se agrego esta linea 13-nov
        paranoid: true,
        deletedAt: "softDelete",
        createdAt: "created_at",
        updatedAt: "updated_at"
    })
    
    return Product;
}

