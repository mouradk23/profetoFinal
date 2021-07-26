var express = require('express');


var router = express.Router();

// router.get('/usuarios', UsuarioController.getAll);
// router.get('/professores', ProfessorController.getAll);

router.get('/', (req, res) => {
    res.json({})
})

module.exports = router;