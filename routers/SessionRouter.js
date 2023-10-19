const express = require('express')
const router = express.Router()
const controller = require('../controller/bookSession')

router.post('/profile', controller.createSession)
router.put('/profile/:session_id', controller.editSession)
router.get('/profile/:session_id', controller.cancelSession)

module.exports = router
