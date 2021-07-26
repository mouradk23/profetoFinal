const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.render('../pages/login')
})

router.get('/registrousuario', (req, res) => {
    res.render('../pages/registroUsuario')
})

router.get('/chaves', (req, res) => {
    res.render('../pages/chaves')
})


module.exports = router;