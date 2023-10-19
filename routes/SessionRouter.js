const express = require('express')
const router = express.Router()
const sessionCtrl = require('../controller/bookSession')

router.post('/session', sessionCtrl.session_create_post)
router.put('/session/:session_id', sessionCtrl.session_edit_post)
router.get('/session/:session_id', sessionCtrl.session_delete_get)
router.get('/session', sessionCtrl.session_show_get)

module.exports = router
