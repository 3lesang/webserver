const router = require('express').Router();
const { getPost, addPost } = require('../controllers/post.controller');

router.post('/', addPost);
router.get('/:id', getPost);

module.exports = router;
