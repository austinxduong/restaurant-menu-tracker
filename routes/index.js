const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')
//add controllers
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', indexController.getIndex)
router.post('/q', indexController.getSearch)

module.exports = router