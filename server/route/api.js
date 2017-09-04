'use strict'

const router = require('express').Router()
const ProductController = require('../controller/ProductController')

// minddleware
function validateId(request, response, next){
  let id = request.params.id
  if(/^[0-9a-f]{24}$/.test(id)){
    return next()
  }
  let err = new Error('invalid id')
  err.status = 422
  next(err)
}

// router.use(ensureAuth) para verificar se estiver autenticado

router.get   ('/products', ProductController.list)
router.get   ('/products/:id', validateId, ProductController.byId)
router.post  ('/products', ProductController.create)
router.put   ('/products/:id', validateId, ProductController.update)
router.delete('/products/:id', validateId, ProductController.delete)

module.exports = router
