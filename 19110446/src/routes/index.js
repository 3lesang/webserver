const router = require('express').Router()
const mssv = require("./19110446.route.js");
const home = require("./home.route.js");
const message = require("./message.route.js");


router.use('/', home)
router.use('/19110446', mssv)
router.use('/message', message)
module.exports = router
