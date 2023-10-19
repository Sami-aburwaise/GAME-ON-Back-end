const express = require('express')
const router = express.Router()
const controller = require('../controller/auth')
const middleware = require('../middleware')

router.post('/signup', controller.signUp)

module.exports = router
