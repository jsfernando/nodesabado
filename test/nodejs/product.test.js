// test/nodejs/product.test.js

'use strict'

const app = require('../../server/app')
const request = require('supertest')(app)
const assert = require('assert')

describe('product endpoints', () => {

  it('GET /api/products list all', (done) => {
    request
      .get('/api/products')
      .end((err, result) => {
        assert.equal(200, result.status)
        assert.ok(result.body)
        console.log('result.body', result.body)
        done()
      })
  })
  it('POST /api/products create a new products', (done) => {
    request
    .post('/api/products')
    .send({name: 'Maquiagem MAC', price: 299.9})
    .end((err,result) => {
      assert.equal(201, result.status)

      assert.equal('Maquiagem MAC', result.body.name)
      assert.equal(299.9, result.body.price)
      assert.ok(result.body._id)
      done()
    })
  })
})
