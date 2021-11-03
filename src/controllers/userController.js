const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');

const User = require('../models/User');

const controller = {
	profile: (req,res) => {
		let users = User.findAll()
		return res.render('profile', {users: users})
	},

	register: (req, res) => {
		return res.render('register');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = User.findByField('email', req.body.email);

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

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		// let userCreated = User.create(userToCreate);

        User.create(userToCreate);



		return res.redirect("/user/login");
	},
    login: (req,res) => {
        return res.render('login')
    },
	processLogin: (req,res) => {
		let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let passwordCheck = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if(passwordCheck) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
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
	},
	profile: (req, res) => {
		return res.render('profile', {
			user: req.session.userLogged
		});
	},

	logout: (req, res) => {
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;