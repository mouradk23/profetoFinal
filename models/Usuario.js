const {Model, DataTypes} = require('sequelize')

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            usuario: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
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

