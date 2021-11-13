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
    
    return Rol;
}