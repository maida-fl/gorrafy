module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.INTEGER
        },
        avatar: {
            type: dataTypes.STRING.BINARY
        }, 
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }, 
    }, {
        tableName: 'users',
        paranoid: true,
        deletedAt: "softDelete",
        createdAt: "created_at",
        updatedAt: "updated_at",   })
    
    User.associate = function (models){
 
        User.belongsTo (models.Rol, {
            as: "roles",
            foreingKey: "id_rol"
        })
    }  


    return User;
}

