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
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
    }, {
        tableName: 'categories',
        paranoid: true,
        deletedAt: "softDelete",
        createdAt: "created_at",
        updatedAt: "updated_at"
    })

    Category.associate = function(models) {
        Category.hasMany(models.Product, { // models.Product -> Product es el alias
            as: "products", // El nombre del modelo pero en plural
            foreignKey: "id_category"
        })
    }
    
    return Category;
}

