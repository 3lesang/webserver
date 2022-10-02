const router = require('express').Router();
const {
	getPost,
	addPost,
	deletePost,
	addComment,
} = require('../controllers/post.controller');

router.get('/:id', getPost);
router.post('/', addPost);
router.post('/:id/comment', addComment);

router.delete('/', deletePost);

module.exports = router;
