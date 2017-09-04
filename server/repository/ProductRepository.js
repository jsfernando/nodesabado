// server/repository/ProductRepository.js
// repository é o model que vai se conectar ao banco e fazer inserção
// repository é parte do model

// se o produto mudar de banco eu mudo somente esse arquivo
// é a unica camada que muda para o banco...

'use strict'

const db = require('../config/mongo')

let ProductRepository = {
  find: function(query, callback){ // esse callback é a function do repository.find({}, function
    // em um banco relacional
    // db.query('select * from table', callback)
    // assincrono
    db.collection('products').find(query, callback)
  },
  findOne: function(query, callback){
    if(query._id){
      query._id = db.ObjectId(query._id);
    }
    db.collection('products').findOne(query, callback)
  },
  insert(data, callback){
    db.collection('products').insert(data, callback)
  },
  update: (query, data, callback) => {
    if(query._id){
      query._id = db.ObjectId(query._id);
    }
    db.collection('products').update(query, {$set: data}, callback) //set só muda o que vc mandar
  },
  remove: (query, callback) => {
    if(query._id){
      query._id = db.ObjectId(query._id);
    }
    db.collection('products').remove(query, callback)
  }
}

module.exports = ProductRepository
