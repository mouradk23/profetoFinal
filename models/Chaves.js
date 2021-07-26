const {Model, DataTypes} = require('sequelize')

class Chave extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING(8),
                allowNull: false,
                unique: true
            },
            sala: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
            {
                sequelize,
                modelName: 'chave',
                paranoid: true
            })
    }
}

module.exports = Chave;