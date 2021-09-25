const mainController = {
    index: (req, res) => {
        res.render('index');
    },
    producto: (req, res) => {
        res.render('producto');
    },
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
    },
    compra: (req, res) => {
        res.render('compra');
    },
    agregar: (req, res) => {
        res.render('adminAgregar');
    },
    editar: (req, res) => {
        res.render('adminEditar');
    }
};

module.exports = mainController;