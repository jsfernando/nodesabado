// server/controller/MainController.js

'use strict'

const bluebird = require('bluebird')
const repository = bluebird.promisifyAll(require('../repository/ProductRepository'))

let MainController = {

  home: function(request, response, next){
    request.session.user = {
      name: 'jsfer'
    }
    response.render('index', {title: 'Qq coisa'} )
 },
  create: function(request, response, next){
    console.log(request.session.user)
    request.session.destroy()

    response.status(201).send('criado') // para post - criar o status 201
 },
 listProducts: function(request, response, next){
   repository.findAsync({})
    .then(function(data){
      response.render('products',{data: data} ) // organizar pasta de views
    })
    .catch(next)
 }



}

module.exports = MainController
