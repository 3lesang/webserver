const { Post } = require('../models');

class PostService {
  async getAll() {
    return await Post.getAll();
  }
  async findOne({ slug }) {
    return await Post.findOne({ slug });
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
