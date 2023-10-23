const express = require('express')
const router = express.Router()
const sessionCtrl = require('../controller/bookSession')

router.post('/gamesession', sessionCtrl.session_create_post)
router.put('/gamesession/:session_id', sessionCtrl.session_edit_post)
router.get('/gamesession/:session_id', sessionCtrl.session_delete_get)
router.get('/gamesession', sessionCtrl.session_show_get)

module.exports = router
