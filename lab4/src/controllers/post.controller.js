//const { PostService } = require('../services');
const getPost = async (req, res) => {
	//const data = await PostService.findOne();
	res.send(req.params);
};
const addPost = async (req, res) => {
	console.log(req.body)
	res.send('add post')
};
module.exports = {
	getPost,
	addPost,
};
