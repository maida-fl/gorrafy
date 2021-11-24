module.exports = (sequelize, dataTypes) => {
    const Rol = sequelize.define('Rol', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        rol: {
            type: dataTypes.STRING
        }
    }, {
        tableName: 'roles',
        paranoid: true,
        deletedAt: "softDelete",
        createdAt: "created_at",
        updatedAt: "updated_at"
    })

    Rol.associate = function(models) {
        Rol.belongsTo(models.User, { // models.User -> User es el alias
            as: "users", // El nombre del modelo pero en plural
            foreignKey: "id_rol"
        })
    }
    
    return Rol;
}