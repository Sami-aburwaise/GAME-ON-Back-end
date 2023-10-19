//  load package
const express = require('express')

//  invoke router
const router = express.Router()

//  controllers
const reviewCtrl = require('../controllers/review')

//  routes
router.post('/add_review', reviewCtrl.review_add_post)

//  export to server.js
module.exports = router
