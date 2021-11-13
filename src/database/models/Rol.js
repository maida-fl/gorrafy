module.exports = (sequelize, dataTypes) => {
    const Rol = sequelize.define('Rol', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        rol: {
            type: dataTypes.STRING
        },
        
    }, {
        tableName: 'roles',
        timestamps: false,
        paranoid: true,
        deletedAt: "softDelete", 
    /*  createdAt: "created_at", //estan bien? en el diagrama no incluimos marcas temporales
        updatedAt: "updated_at"  //estan bien? en el diagrama no incluimos marcas temporales 
    */
    })

    Rol.associate = function(models) {
        Rol.hasMany(models.User, { // models.User -> User es el alias
            as: "users", // El nombre del modelo pero en plural
            foreignKey: "id_rol"
        })
    }
    
    return Rol;
}