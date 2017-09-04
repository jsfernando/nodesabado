// server/route/index.js
'use strict'

 const ROUTER = require('express').Router()
 const MainController = require('../controller/MainController')

 // ROUTER.get('/', function(request, response, next){
 // 	response.send('use... - ROUTER')
 // })
 ROUTER.get('/', MainController.home)
 // ROUTER.post('/', function(request, response, next){
 //  response.status(201).send('post - ROUTER') // para post - criar o status 201
 // })

 // ROUTER.post('/', MainController.create)
 // para testar session
 ROUTER.get('/login', MainController.create)
 ROUTER.get('/products', MainController.listProducts) // rota indicado no controller

 ROUTER.use('/api', require('./api'))

 module.exports = ROUTER
