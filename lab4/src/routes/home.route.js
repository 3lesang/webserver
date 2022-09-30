const router = require('express').Router();
const { getAll } = require('../controllers/home.controller');

router.get('/', getAll);

module.exports = router;
