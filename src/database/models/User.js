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
        createdAt: "created_at", //estan bien? en el diagrama no incluimos marcas temporales
        updatedAt: "updated_at"  //estan bien? en el diagrama no incluimos marcas temporales
    })
    
    return Product;
}

