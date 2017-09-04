//test/nodejs/main.test.js
'use strict'

const app = require('../../server/app')
const request = require('supertest')(app)
const assert = require('assert')

//escrevendo teste ...uma suite de possibilidades
// test mocha
describe('main tests', ()=> {
  it('GET / should respond 200', (done) => { // => arrow function
    //descrevendo o que o teste vai fazer
    // throw new Error('deu muito muito ruim... que pena..')
    request
      .get('/')
      .end(function(err,result){
        assert.ok(!err)
        assert.equal(200, result.status)
        done() // esse parametro é pra avisar que o teste assincrono acabou
      })
  })
  it('GET / not-found respond 404', (done) => {
    request
      .get('/not-found')
      .end(function(err,result){
        assert.equal(404, result.status)
        assert.equal('não existe', result.text)
        done()
      })
  })
  it.skip('GET / api should PING', () => {
  })
})
