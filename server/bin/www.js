//server/bin/www.js

'use strict'

const debug = require('debug')('sabado:bin:www')
const app= require('../app')
app.listen(3000, function(){
  debug('app running')
})
