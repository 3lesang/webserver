const { PostService } = require('../services');
const getAll = async (req, res) => {
	const data = await PostService.getAll();
	res.render('index', { posts: data });
};

module.exports = {
	getAll,
};
