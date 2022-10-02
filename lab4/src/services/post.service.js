const { Post } = require('../models');

class PostService {
	async getAll() {
		return await Post.getAll();
	}
	async findOne({ id }) {
		return await Post.findOne({ id });
	}
	async addComment({ id }, data) {
		return await Post.addComment({ id }, data);
	}
	async insert(data) {
		return await Post.insert(data);
	}
	async delete({ id }) {
		return await Post.delete({ id });
	}
	async update(data) {
		return await Post.update(data);
	}
}

module.exports = new PostService();
