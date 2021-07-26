var express = require('express');
const UsuarioController = require('../controller/usuarioController')

var router = express.Router();

// router.get('/usuarios', UsuarioController.getAll);
// router.get('/professores', ProfessorController.getAll);

router.get('/', (req, res) => {
    res.json({})
})

router.post('/login', UsuarioController.login)

module.exports = router;