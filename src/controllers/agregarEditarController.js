const agregarEditarController = {
    admin: (req, res) => {
        res.render('admin');
    },
    agregar: (req, res) => {
        res.render('adminAgregar');
    },
    editar: (req, res) => {
        res.render('adminEditar');
    }
};

module.exports = agregarEditarController;