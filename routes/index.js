const express = require('express')
const router = express.Router()
//add controllers
const { ensureAuth, ensureGuest } = require('../middleware/auth')


module.exports = router