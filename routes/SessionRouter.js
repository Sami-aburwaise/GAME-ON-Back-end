const express = require('express')
const router = express.Router()
const sessionCtrl = require('../controller/bookSession')

router.post('/gamesession/create', sessionCtrl.session_create_post)
router.post('/gamesession/edit/:session_id', sessionCtrl.session_edit_post)
router.get('/gamesession/delete/:session_id', sessionCtrl.session_delete_get)
router.get('/gamesession/get', sessionCtrl.session_show_get)

module.exports = router
