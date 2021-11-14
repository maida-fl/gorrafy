module.exports = (sequelize, dataTypes) => {
    const Colour = sequelize.define('Colour', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        colour: {
            type: dataTypes.STRING
        },
        
    }, {
        tableName: 'colours',
        timestamps: false
        // paranoid: true,
        // deletedAt: "softDelete", 
    /*  createdAt: "created_at", //estan bien? en el diagrama no incluimos marcas temporales
        updatedAt: "updated_at"  //estan bien? en el diagrama no incluimos marcas temporales 
    */
    })

    //Este no se si es 1:N o M:N, si vinculamos unico ID con 1 solo color 1:N sino M:N, en este caso esta hecho 1:N
    Colour.associate = function(models) {
        Colour.hasMany(models.Product, { // models.Product -> Product es el alias
            as: "products", // El nombre del modelo pero en plural
            foreignKey: "id_colour"
        })
    }
    
    return Colour;
}
