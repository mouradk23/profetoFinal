const {Model, DataTypes} = require('sequelize')

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            usuario: {
                type: DataTypes.STRING(15),
                allowNull: false,
                unique: true
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tipo: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            cpf: {
                type: DataTypes.STRING(11),
                allowNull: false,
                unique: true
            }

        },
        {
           sequelize,
           modelName: 'usuario',
           paranoid: true
        })
    }
}

module.exports = Usuario;

