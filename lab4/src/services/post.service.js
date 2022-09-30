const { Post } = require('../models');

class PostService {
	async getAll() {
		return await Post.getAll();
	}
}

module.exports = new PostService();
