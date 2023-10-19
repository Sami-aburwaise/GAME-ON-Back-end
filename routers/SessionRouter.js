const express = require('express')
const router = express.Router()
const controller = require('../controller/bookSession')

router.post('/profile', controller.createSession)
router.put('/profile/:session_id', controller.editSession)

module.exports = router
