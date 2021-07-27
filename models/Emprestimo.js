const { Model, DataTypes } = require('sequelize')

class Emprestimo extends Model {
    static init(sequelize) {
        super.init({
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            pessoa: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            cpf: {
                type: DataTypes.STRING(11),
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'emprestimo',
            paranoid: true
        })
    }
}

module.exports = Emprestimo;