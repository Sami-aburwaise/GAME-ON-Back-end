const express = require('express')
const router = express.Router()
const controller = require('../controller/bookSession')

router.post('/profile', controller.createSession)

module.exports = router
