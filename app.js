const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});
app.get("/productos", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/producto.html"))
});

app.get("/compra", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/compra.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.listen(3000, () => {
    console.log("Serving on port 3000!   http://localhost:3000/");
});
