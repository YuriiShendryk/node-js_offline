const { addPost, getPostById, getPosts, removePost, updatePost } = require('../services/postsService');

const { statusCode } = require('../helpers/constants');

const getAllPostsController = async (req, res) => {
  const user = req.user;
  const posts = await getPosts(user.id);
  res.status(statusCode.OK).json(posts);
};

const getPostController = async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  const post = await getPostById(id, user.id);
  res.status(statusCode.OK).json(post);
};

const createPostController = async (req, res) => {
  const user = req.user;
  const newPost = await addPost(req.body, user.id);
  res.status(statusCode.CREATED).json(newPost);
};

const updateOnePostController = async (req, res) => {
  const user = req.user;
  const { postId } = req.params;
  const updatedPost = await updatePost(postId, req.body, user.id);
  res.status(statusCode.OK).json(updatedPost);
};

const deletePostController = async (req, res) => {
  const id = req.params.postId;
  const user = req.user;
  await removePost(id, user.id);
  res.status(statusCode.OK).json({ message: 'success' });
};

module.exports = {
  getAllPostsController,
  getPostController,
  createPostController,
  updateOnePostController,
  deletePostController,
};
