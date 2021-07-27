const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

//MODELOS
const Usuario = require('../models/Usuario')
const Chave = require('../models/Chaves')
const Emprestimo = require('../models/Emprestimo')

//INICIALIZACAO DOS MODELOS
Usuario.init(connection)
Chave.init(connection)
Emprestimo.init(connection)

//RELACIOANAMENTOS
Chave.hasOne(Emprestimo);
Emprestimo.belongsTo(Chave);


// exemplo de relacionamento 1pM (ID de permissao vai para usuario)
// Permissao.hasMany(Usuario)
// Usuario.belongsTo(Permissao)

//SYNC MODELOS
Usuario.sync()
Emprestimo.sync()
Chave.sync()

module.exports = connection;