const { PostService } = require('../services');

const getAll = async (req, res) => {
  const data = await PostService.getAll();
  res.json(data);
};
module.exports = {
  getAll,
};
