const User = require('../models/User');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = true;

	// cookies para recordar usuario
	
	let emailInCookie = req.cookies.userEmail;
	let userFromCookie = User.findByField('email', emailInCookie);
	
	if(userFromCookie){
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = false;
	}


	next();
}

module.exports = userLoggedMiddleware;