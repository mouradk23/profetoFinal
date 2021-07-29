var express = require('express');
const UsuarioController = require('../controller/usuarioController')
const chaveController = require('../controller/chaveController')
const emprestimoController = require('../controller/emprestimeController')
var router = express.Router();

// router.get('/usuarios', UsuarioController.getAll);
// router.get('/professores', ProfessorController.getAll);

router.get('/', (req, res) => {
    res.json({})
})

router.post('/login', UsuarioController.login)

router.get('/chaves', chaveController.getAll)
router.post('/registrochave', chaveController.registerChave)

router.post('/emprestar', emprestimoController.emprestar)
router.put('/atualizar', emprestimoController.atualizar)

module.exports = router;