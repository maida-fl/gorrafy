
const db = require('../../database/models');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const User = db.User;



const userAPIController = {
    list : function (req,res) {
        User.findAll()
        .then(usersInDb => {

            let newArray = usersInDb.map((user) => {
                return user.dataValues;
            });

            // Eliminamos la información sensible que no queremos enviar, dejando solo el ID, firstName, lastName, email, y url
            newArray.forEach((user) => {
                delete user.created_at;
                delete user.updated_at;
                delete user.password;
                delete user.category;
                delete user.avatar;
                delete user.id_rol;
                user.detailURL = `http://localhost:3001/api/users/${user.id}`
            })

            return res.status(200).json({
                total: usersInDb.length,
                data: newArray,
                status: 200
            })
        })
        .catch(error => {console.log(error)});
    }/*,

    userId: function (req,res) {
        User.findByPk(req.params.id)
        .then(user => {
            if (user != null) {
                userToSend = user.dataValues;
                // Eliminamos la información sensible que no queremos enviar, dejando solo el ID, firstName, lastName, email, y url de imagen
                delete userToSend.password;
                delete userToSend.birthdate;
                delete userToSend.roleId;
                delete userToSend.profileImage;
                delete userToSend.deleted;

                return res.status(200).json({
                    data: {
                        userToSend,
                        imageURL: `/public/images/users/${userToSend.image}`
                    },
                    status: 200
                })
            }
            return res.send({
                error: 'No se encuentra el usuario pedido, intente con otro ID',
            })
        })
        .catch(error => {console.log(error)});
    }
*/
}

module.exports = userAPIController;