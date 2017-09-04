//nodesabado/app.js
'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const debug = require('debug')('sabado:server:app')
const nunjucks = require('nunjucks')
const session = require('express-session')

// é um minddleware
app.use(session({ // https://github.com/expressjs/session
  secret: 'novatec secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
		secure: false
	}
}))

//express vou usar html pelo "nunjucks" ou ejs
app.set('view engine', 'html');

nunjucks.configure(__dirname + '/views', {
	autoescape: true,
	express: app,
	tags: ''
})

// caminho completo do projeto
global.APP_ROOT = require('path').join(__dirname + '/../')
app.use(express.static(APP_ROOT + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/', require('./route/index.js'))

app.use(function(req, resp, next){
	let err = new Error('não existe')
	err.status = 404
	next(err)
})
app.use(function(err, req, resp, next){
	resp.status(err.status || 500).send(err.message || 'deu ruim')
})

// app.listen(3000) foi para bin/www.js
module.exports = app
