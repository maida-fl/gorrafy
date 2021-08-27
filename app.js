const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.listen(3000, () => {
    console.log("Serving on port 3000!");
});