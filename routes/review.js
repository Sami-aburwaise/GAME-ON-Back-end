//  load package
const express = require('express')
const { stripToken, verifyToken } = require('../middleware')

//  invoke router
const router = express.Router()

//  controllers
const reviewCtrl = require('../controllers/review')

//  routes
router.post('/add_review', stripToken, verifyToken, reviewCtrl.review_add_post)
router.get(
  '/delete_review',
  stripToken,
  verifyToken,
  reviewCtrl.review_delete_get
)
router.post(
  '/update_review',
  stripToken,
  verifyToken,
  reviewCtrl.review_update_post
)
//  export to server.js
module.exports = router
