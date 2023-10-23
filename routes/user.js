const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')

router.get('/profile', userCtrl.user_show_get)

module.exports = router
