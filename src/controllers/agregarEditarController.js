const agregarEditarController = {
    agregar: (req, res) => {
        res.render('adminAgregar');
    },
    editar: (req, res) => {
        res.render('adminEditar');
    }
};

module.exports = agregarEditarController;