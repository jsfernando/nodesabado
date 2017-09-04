//server/config/mongo.js

// criar nossa conexão com o mongodb
'use strict'

const debug = require('debug')('sabado:config:mongo')
const mongojs = require('mongojs')


let db=mongojs('localhost:27017/curso-node') //nome do banco

// trocando o banco para testes por banco test, criando a variável database e setando na linha 16 no modelo ecma6
// linha 17 equivale

// let database = process.env.NODE_ENV == 'test' ? 'curso-node-test' : 'curso-node'

// let db=mongojs(`localhost:27017/${database}`) // para teste mudou da linha de cima para essa linha
// let db=mongojs('localhost:27017/+ database') // equivale ao ecma6 da linha de cima...

// let db=mongojs('user@pass:localhost:27017/curso-node') //conexao com user/pwd

module.exports = db
