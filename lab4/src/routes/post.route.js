const router = require('express').Router();
const {
	getPost,
	addPost,
	deletePost,
	updatePost,
	addComment,
} = require('../controllers/post.controller');

router.get('/:id', getPost);
router.post('/', addPost);
router.post('/:id', updatePost);
router.delete('/', deletePost);
router.post('/:id/comment', addComment);

module.exports = router;
