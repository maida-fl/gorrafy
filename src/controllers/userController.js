const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');
const db = require('../database/models');
const { Op } = require("sequelize");

const controller = {
	register: (req, res) => {
		return res.render('register');
	},
	processRegister: (req, res) => {
		db.User.findOne({
			where: {email: req.body.email}
		}).then((userInDB) => {
			if (userInDB) {
				return res.render('register', {
					errors: {
						email: {
							msg: 'Este email ya está registrado'
						}
					},
					oldData: req.body
				});
			}	
		})

		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}else{
			db.User.create({
				...req.body,
				password: bcryptjs.hashSync(req.body.password, 10),
				avatar: req.file.filename,
				id_rol: 1
			})
			.then(()=> res.redirect('/user/login'))            
			.catch(error => res.send(error))
		}
	},
    login: (req,res) => {
        return res.render('login')
    },
	processLogin: (req,res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('login', {
				errors: resultValidation.mapped()
			});
		} else {
		db.User.findOne({
			where: {email: req.body.email}
		}).then((userToLogin) => {
			if(userToLogin) {
				let passwordCheck = bcryptjs.compareSync(req.body.password, userToLogin.password);
				if(passwordCheck) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
	
					// Cookies para recordar usuario
	
					if(req.body.remember_user){
						res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
					}
	
					return res.redirect('/user/profile/' + userToLogin.id);
				}
				return res.render('login', {
					errors: {
						email: {
							msg: 'Las credenciales son inválidas'
						}
					}
				});
			}
			return res.render('login', {
				errors: {
					email: {
						msg: 'No se encuentra un usuario registrado con este email'
					}
				}
			});	
		})
	}
	},
	profile: (req, res) => {
		db.User.findByPk(req.params.id)
			.then((user) => {
				return res.render('profile', {user})
				// return res.render('profile', {
				// 	user: req.session.userLogged
				// });
			})
			.catch(error => res.send(error))
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},
	update: (req, res) => {
		db.User.findByPk(req.params.id)
		.then((user) => {
			return res.render('updateUser', {user})
		})
		.catch(error => res.send(error))
	},
	processUpdate: (req,res) => {
		db.User.update({
			avatar: req.file.filename 
		},
		{where: {id: req.params.id}})
		.then(function(){
			res.redirect('/user/profile/' + req.params.id)
		})
		.catch(error => res.send(error));
	}
}

module.exports = controller;