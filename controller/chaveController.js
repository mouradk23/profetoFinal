const Sequelize = require('sequelize')
const Chave = require('../models/Chaves')

module.exports = {
    async registerChave(req, res){

        try {
            const { nome, sala, disponibilidade } = req.body
            const chaveNova = await Chave.create({nome, sala, disponibilidade})
            
            if (chaveNova) {
                res.status(201).json({chave: chaveNova, created: true});
            }
        } catch (error) {
            res.status(400).json(error)
        }

    },
    async getAll(req, res){
        const chaves = await Chave.findAll();
        res.json(chaves)
    },

}