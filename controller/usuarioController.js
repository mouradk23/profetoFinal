const Sequelize = require('sequelize');
// const Permissao = require('../models/Permission')
const Usuario = require('../models/Usuario')

module.exports = {

    async getAll(req, res){
        const usuarios = await Usuario.findAll();
        res.json(usuarios)
    },

    async getById(req, res) {
        const usuario = await Usuario.findByPk(req.params.id)
        res.json(usuario)
    },

    async login(req, res) {
        try {
            const { usuario, senha } = req.body
        const usuarioLogin = await Usuario.findOne({
            where: {
                usuario: usuario
            }
        })

        if (usuarioLogin.senha == senha) {
            res.json(usuarioLogin)
        }else{
            res.status(400).json({erro: 'Senha ou usuário incorreto'})
        }
        } catch (error) {
            res.status(400).json({erro: 'Senha ou usuário incorreto'})
        }

    },

    async register(req, res){

        try {
            const { nome, usuario, senha, permissaoId } = req.body
            const usuarioCriado = await Usuario.create({nome, usuario, senha, permissaoId})
            
            if (usuarioCriado) {
                res.status(201).json({user: usuarioCriado, created: true});
            }
        } catch (error) {
            res.status(400).json(error)
        }

    }

}