const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.render('../pages/login')
})

// router.get('/registrousuario', (req, res) => {
//     res.render('../pages/registroUsuario')
// })

router.get('/registrochave', (req, res) => {
    res.render('../pages/registroChave')
})

router.get('/chaves', (req, res) => {
    res.render('../pages/chaves')
})


module.exports = router;