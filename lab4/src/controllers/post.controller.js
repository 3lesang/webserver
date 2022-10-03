const { PostService } = require('../services');
const { currentDate, toSlug } = require('../utils');
const getPost = async (req, res) => {
	const slug = req.params.slug;
	const post = await PostService.findOne({ slug });
	res.render('post', { post: post });
};
const addPost = async (req, res) => {
	const data = {
		id: String(Date.now()),
		title: req.body.title,
		thumb: `https://picsum.photos/400/400?random=${Math.random()}`,
		slug: toSlug(req.body.title),
		content: req.body.content,
		comments: [],
		auth: 'sang',
		created_at: currentDate(),
		updated_at: currentDate(),
	};
	const status = await PostService.insert(data);
	res.redirect(req.get('referer'));
};
const deletePost = async (req, res) => {
	const id = req.body.id;
	const status = await PostService.delete({ id });
	res.json({ status: 'ok' });
};
const updatePost = async (req, res) => {
	const id = req.params.id;
	const slug = toSlug(req.body.title);
	const data = { id, slug, ...req.body };
	const status = await PostService.update(data);
	if (status) {
		res.redirect(req.get('referer'));
	}
};

const addComment = async (req, res) => {
	const id = req.params.id;
	const content = req.body.comment;
	const data = {
		id: 'cmt' + String(Date.now()),
		content,
		auth: 'sang',
		created_at: currentDate(),
	};
	const status = await PostService.addComment({ id }, data);
	res.redirect(req.get('referer'));
};
module.exports = {
	getPost,
	addPost,
	updatePost,
	deletePost,
	addComment,
};
