const express = require('express')
const router = express.Router()
const authCtrl = require('../controller/auth')
const middleware = require('../middleware')

router.post('/signup', authCtrl.signUp)
router.post('/signin', authCtrl.signIn)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  authCtrl.checkSession
)

module.exports = router
