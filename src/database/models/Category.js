module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category: {
            type: dataTypes.STRING
        },
        
    }, {
        tableName: 'categories',
        timestamps: false
        // paranoid: true,
        // deletedAt: "softDelete", 
    /*  createdAt: "created_at", //estan bien? en el diagrama no incluimos marcas temporales
        updatedAt: "updated_at"  //estan bien? en el diagrama no incluimos marcas temporales 
    */
    })

    Category.associate = function(models) {
        Category.hasMany(models.Product, { // models.Product -> Product es el alias
            as: "products", // El nombre del modelo pero en plural
            foreignKey: "id_category"
        })
    }
    
    return Category;
}

