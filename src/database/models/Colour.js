module.exports = (sequelize, dataTypes) => {
    const Colour = sequelize.define('Colour', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        colour: {
            type: dataTypes.STRING
        }
    }, {
        tableName: 'colours',
        paranoid: true,
        deletedAt: "softDelete",
        createdAt: "created_at",
        updatedAt: "updated_at"
    })

    Colour.associate = function(models) {
        Colour.belongsToMany(models.Product, {
            as: "products",
            through: "product_colour",
            foreignKey: "id_colour",
            otherKey: "id_product",
            timestamps: false
        })
    }
    
    return Colour;
}
