function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = true;
	
	if (req.session.userLogged) {
		res.locals.isLogged = false;
	}

	next();
}

module.exports = userLoggedMiddleware;