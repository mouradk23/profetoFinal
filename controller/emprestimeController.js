const Sequelize =  require('sequelize')
const Chave = require('../models/Chaves')
const Emprestimo = require('../models/Emprestimo')


module.exports = {
    async emprestar(req, res) {
        try {
            const { status, pessoa, cpf, chave_id } = req.body 
            const chave = await Chave.findByPk(chave_id)
            console.log(req.body);
            const novoEmprestimo = await Emprestimo.create({status, pessoa, cpf })
            await chave.update({disponibilidade: true})
            await novoEmprestimo.setChave(chave)
            if (novoEmprestimo) {
                res.status(201).json({emprestimo: novoEmprestimo, created: true});
            }
        } catch (error) {
            res.status(400).json(error)
        }
    },
    async atualizar(req, res) {
        try {
            const { id, status, chave_id } = req.body
            const chave = await Chave.findByPk(chave_id)
            console.log(req.body);
            const emprestimo = await Emprestimo.findByPk(id)
            console.log(emprestimo);
            await chave.update({disponibilidade: false})
            await emprestimo.update({status: true})
            res.status(200).json(emprestimo)
        } catch (error) {
            res.status(400).json(error)
        } 
    }
}