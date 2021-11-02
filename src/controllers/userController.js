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
		res.send(req.body);
	}

	// loginProcess: (req, res) => {
	// 	let userToLogin = User.findByField('email', req.body.email);
		
	// 	if(userToLogin) {
	// 		let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
	// 		if (isOkThePassword) {
	// 			delete userToLogin.password;
	// 			req.session.userLogged = userToLogin;

	// 			if(req.body.remember_user) {
	// 				res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
	// 			}

	// 			return res.redirect('/user/profile');
	// 		} 
	// 		return res.render('userLoginForm', {
	// 			errors: {
	// 				email: {
	// 					msg: 'Las credenciales son inválidas'
	// 				}
	// 			}
	// 		});
	// 	}

	// 	return res.render('userLoginForm', {
	// 		errors: {
	// 			email: {
	// 				msg: 'No se encuentra este email en nuestra base de datos'
	// 			}
	// 		}
	// 	});
	// },
	// profile: (req, res) => {
	// 	return res.render('userProfile', {
	// 		user: req.session.userLogged
	// 	});
	// },

	// logout: (req, res) => {
	// 	res.clearCookie('userEmail');
	// 	req.session.destroy();
	// 	return res.redirect('/');
	// }
}

module.exports = controller;