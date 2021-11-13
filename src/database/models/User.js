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
    }, {
        tableName: 'users',
        timestamps: true,
        paranoid: true,
        deletedAt: "softDelete", 
        createdAt: "created_at", //estan bien? en el diagrama no incluimos marcas temporales
        updatedAt: "updated_at"  //estan bien? en el diagrama no incluimos marcas temporales
    })
    
    User.associate = function (models){
 
        User.belongsTo (models.Rol, {
            as: "roles",
            foreingKey: "id_rol"
        })
    }  


    return User;
}

