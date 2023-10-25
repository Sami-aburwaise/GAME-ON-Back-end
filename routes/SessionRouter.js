const express = require('express')
const router = express.Router()
const sessionCtrl = require('../controller/bookSession')
const { stripToken, verifyToken } = require('../middleware')

router.post(
  '/gamesession/create',
  stripToken,
  verifyToken,
  sessionCtrl.session_create_post
)
router.post(
  '/gamesession/edit/:session_id',
  stripToken,
  verifyToken,
  sessionCtrl.session_edit_post
)
router.get(
  '/gamesession/delete/:session_id',
  stripToken,
  verifyToken,
  sessionCtrl.session_delete_get
)
router.get('/gamesession/get', sessionCtrl.session_show_get)

module.exports = router
