'use strict'

const bluebird = require('bluebird')
// const repository = require('../repository/ProductRepository')
// trocado pelo promise página 133
const repository = bluebird.promisifyAll(require('../repository/ProductRepository'))


let ProductController = {
  list: function(request, response, next) {
    let query = {}
    if (request.query.name){
      query.name = new RegExp(request.query.name,'i')
    }

    // repository.find(query, function(err, data){ // primeiro argumento do callback é o err
    //   if(err){
    //     return next(err)
    //   }
    //   response.json(data)
    // })

    // usando uma promise
    repository.findAsync(query)
      .then(data => response.json(data))
      .catch(next)
  },
  byId: function(request, response, next) {
    let id = request.params.id

    // repository.findOne({ _id: id}, (err,data) => {
    //   if (err){
    //     return next(err)
    //   }
    //   response.json(data)
    //   // response.send('..by Id: ' + request.params.id + 'query:' + ab)
    // })

    // usando uma promise
    repository.findOneAsync({ _id: id})
      .then((data) => {
        response.json(data)
      })
      .catch(next)
  },
  create: function(request, response, next) {
    let body = request.body
    repository.insert(body, (err,data) => {
      if(err){
        return next(err)
      }
      response.status(201).json(data)
    })
    // console.log(request.body)
    // response.status(201).send(req.headers)
  },
  update: function(request, response, next) {
    let body = request.body
    let id = request.params.id
    repository.update({ _id: id}, body, (err,data) => {
      if(err){
        return next(err)
      }
      response.json(data)
    })
    // response.send('update...')
  },
  delete: function(request, response, next) {
    let id = request.params.id
    repository.remove({ _id: id}, (err,data)=> {
      if (err){
        return next(err)
      }

      if(data.n > 0){
        response.sendStatus(204)
      } else{
        response.status(404).send('Não há nada para deletar')
      }
      // aqui dentro é no callback só aparece a mensagem depois que deletou mesmo
      // response.sendStatus(204)
    })
    // aqui seria fora do callback, já mostra a mensagem antes de deletar
    // response.sendStatus(204)
  }
}

module.exports = ProductController

// <form action="/api/"
