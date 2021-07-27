const Sequelize =  require('sequelize')
const Emprestimo = require('../models/Emprestimo')


module.exports = {
    async emprestar(req, res) {
        try {
            const { status, pessoa, cpf, chave_id } = req.body 
            const novoEmprestimo = await Emprestimo.create({status, pessoa, cpf, chave_id })

            if (novoEmprestimo) {
                res.status(201).json({emprestimo: novoEmprestimo, created: true});
            }
        } catch (error) {
            res.status(400).json(error)
        }
    }
}