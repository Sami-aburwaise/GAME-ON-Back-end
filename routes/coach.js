//  load package
const express = require('express')

//  invoke router
const router = express.Router()


//  controllers
const coachCtrl = require('../controllers/coach')

//  routes
router.post('/add_coach', coachCtrl.coach_add_post)
router.get('/show_coach', coachCtrl.coach_show_get)

//  export to server.js
module.exports = router