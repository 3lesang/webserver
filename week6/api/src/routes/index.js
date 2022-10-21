const router = require('express').Router();
const home = require('./home.route');
const post = require('./post.route');

router.use('/', home);
router.use('/post', post);

module.exports = router;
