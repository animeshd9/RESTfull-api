const express = require('express')
const router = express.Router()
const controller = require("../controller/user.controller")

console.log(controller.details)

router.get('/details',controller.details)
router.post('/signup',controller.register)
router.post('/login',controller.login)
router.post('/logout',)

module.exports=router