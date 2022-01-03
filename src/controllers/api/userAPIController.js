
const db = require('../../database/models');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const User = db.User;



const userAPIController = {
    list : function (req,res) {
        User.findAll()
        .then(users => {

            let newData = users.map((user) => {
                return user.dataValues;
            });

        
            newData.forEach((user) => {
                delete user.created_at;
                delete user.updated_at;
                delete user.password;
                delete user.category;
                delete user.avatar;
                delete user.id_rol;
                user.detailURL = `http://localhost:3001/api/users/${user.id}`
            })

            return res.status(200).json({
                total: users.length,
                data: newData,
                status: 200
            })
        })
        .catch(error => {console.log(error)});
    },

    detail: function (req,res) {
        User.findByPk(req.params.id)
        .then(user => {
            if (user != null) {
                userDetail = user.dataValues;
        
                delete userDetail.created_at;
                delete userDetail.updated_at;
                delete userDetail.password;
                delete userDetail.category;
                /*delete userDetail.avatar; */
                delete userDetail.id_rol;

                return res.status(200).json({
                    data: {
                        userDetail,
                        imageURL: `/public/img/${userDetail.avatar}`
                    },
                    status: 200
                })
            }
            return res.send({
                error: 'No existe este usuario buscado',
            })
        })
        .catch(error => {console.log(error)});
    }
}


module.exports = userAPIController;