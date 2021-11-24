const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const User = require('../database/models/User');

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
	
					return res.redirect('/user/profile');
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

	},
	profile: (req, res) => {
		return res.render('profile', {
			user: req.session.userLogged
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;