const { v4: uuidv4 } = require('uuid');
const { PostService } = require('../services');
const { currentDate, toSlug } = require('../utils');

const getPost = async (req, res) => {
  const slug = req.params.slug;
  const post = await PostService.findOne({ slug });
  res.json(post);
};
const addPost = async (req, res) => {
  const data = {
    id: uuidv4(),
    title: req.body.title,
    thumb: `https://picsum.photos/400/400?random=${Math.random()}`,
    slug: toSlug(req.body.title + ' ' + uuidv4()),
    content: req.body.content,
    comments: [],
    auth: 'sang',
    created_at: currentDate(),
    updated_at: currentDate(),
  };
  const status = await PostService.insert(data);
  if (status === -1) {
    return res.json({ status: 'error' });
  }

  return res.json({ status: 'ok' });
};
const deletePost = async (req, res) => {
  const id = req.params.id;
  const status = await PostService.delete({ id });
  if (status === -1) {
    return res.json({ status: 'error' });
  }

  return res.json({ status: 'ok' });
};
const updatePost = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const slug = toSlug(req.body.title + ' ' + uuidv4());
  const data = { id, slug, ...req.body };
  const status = await PostService.update(data);
  if (status === -1) {
    return res.json({ status: 'error' });
  }

  return res.json({ status: 'ok' });
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
  if (status === -1) {
    return res.json({ status: 'error' });
  }

  return res.json({ status: 'ok' });
};
module.exports = {
  getPost,
  addPost,
  updatePost,
  deletePost,
  addComment,
};
