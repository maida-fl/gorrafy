// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

// ************ express() - (don't touch) ************
const app = express();

// ************ Route System require and use() - (don't touch) ************
const mainRouter = require('./routes/main'); // Rutas main
const compraRouter = require('./routes/compra'); // Rutas compra
const productoRouter = require('./routes/producto'); // Rutas producto
const adminRouter = require('./routes/admin'); // Rutas edicion productos
const userRouter = require('./routes/users'); // Rutas usuaarios

// ************ Middlewares - (don't touch) ************
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(methodOverride('_method'));


// ************ Template Engine - (don't touch) ************
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Define que el motor que utilizamos es EJS


app.use('/', mainRouter);
app.use('/producto', productoRouter);
app.use('/compra', compraRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter)




app.listen(3000, () => {
    console.log("Serving on port 3000!   http://localhost:3000/");
});
