// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const mysql2 = require('mysql2/promise');
const MySQLStore = require('express-mysql-session')(session); //Cart session sql

// ************ express() - (don't touch) ************
const app = express();

// ************ Route System require and use() - (don't touch) ************
const mainRouter = require('./routes/main'); // Rutas main
const compraRouter = require('./routes/compra'); // Rutas compra
const productoRouter = require('./routes/producto'); // Rutas producto
const adminRouter = require('./routes/admin'); // Rutas edicion productos
const userRouter = require('./routes/users'); // Rutas usuaarios




// ************ API Route System require and use() - (don't touch) ************

const apiProductoRouter = require('./routes/api/productosApi.js'); // Rutas producto

// ************ Middlewares - (don't touch) ************
const publicPath = path.resolve(__dirname, "public");
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: "grfy",
    resave: false,
    saveUninitialized: false
}));
app.use(cookies());
app.use(userLoggedMiddleware);

// Cart Session 

var options = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'gorras'
};

var connection = mysql2.createPool(options);
var sessionStore = new MySQLStore({
    // How frequently expired sessions will be cleared; milliseconds:
	checkExpirationInterval: 900000,
	// The maximum age of a valid session; milliseconds:
	expiration: 86400000,
}/* session store options */, connection);

sessionStore.close();


// ************ Template Engine - (don't touch) ************
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Define que el motor que utilizamos es EJS


app.use('/', mainRouter);
app.use('/producto', productoRouter);
app.use('/compra', compraRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);


app.use('/api/products', apiProductoRouter)




app.listen(3001, () => {
    console.log("Serving on port 3001!   http://localhost:3001/");
});
