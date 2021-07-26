const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

//MODELOS
// const Usuario = require('../models/User')

//INICIALIZACAO DOS MODELOS
// Usuario.init(connection)

//RELACIOANAMENTOS

// exemplo de relacionamento 1pM (ID de permissao vai para usuario)
// Permissao.hasMany(Usuario)
// Usuario.belongsTo(Permissao)

//SYNC MODELOS
// Usuario.sync()


module.exports = connection;