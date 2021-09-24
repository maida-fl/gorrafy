// ************ Require's ************
const express = require('express');
const path = require('path');

// ************ express() - (don't touch) ************
const app = express();

// ************ Route System require and use() - (don't touch) ************
const mainRouter = require('./routes/main'); // Rutas main

// ************ Middlewares - (don't touch) ************
const publicPath = path.resolve(__dirname, "public");
app.use(express.urlencoded({ extended: false })); // Para que se usa??
app.use(express.static(publicPath));

// ************ Template Engine - (don't touch) ************
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Define que el motor que utilizamos es EJS


app.use('/', mainRouter);
app.use('/producto', mainRouter);
app.use('/register', mainRouter);
app.use('/login', mainRouter);
app.use('/compra', mainRouter);




app.listen(3000, () => {
    console.log("Serving on port 3000!   http://localhost:3000/");
});
