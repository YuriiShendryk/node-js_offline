const { ForbiddenException, NotFoundException } = require('../helpers/exceptions');
const { Post } = require('../model/postModel');

const DEFAULT_LIMIT = 2;
const DEFAULT_SKIP = 0;

const getPosts = async ({skip = DEFAULT_SKIP, limit = DEFAULT_LIMIT, title }) => {
  
  const postsList = await Post.find({ title: { $regex: '.*' + title + '.*' } }).select({__v: 0, topic: 0}).skip(skip).limit(limit).sort({title: -1});
  return {
    items: postsList, meta: {
      skip,
      limit
  } };
};

const getPostById = async (postId, userId) => {
  const post = await Post.findOne({ _id: postId, owner: userId }).populate('owner');
  if (!post) {
    throw new NotFoundException(`Not found post with id ${postId}`);
  }
  return post;
};

const checkPostAvailability = async (postId, userId) => {
  const post = await Post.findOne({
    _id: postId,
  }).exec();

  if (!post) {
    throw new NotFoundException(`Not found post with id ${postId}`);
  }
  // this is only for exaplme, we can just find post by id and owner
  if (post.owner !== userId) {
    throw new ForbiddenException();
  }
  return post;
};

const addPost = async (body, userId) => {
  const newPost = await Post.create({ ...body, owner: userId });
  return newPost;
};

const updatePost = async (postId, body, userId) => {
  const post = await checkPostAvailability(postId, userId);
  // const post = await findOneAndUpdate({_id: postId, owner: userId});
  // if (!post) {throw new NotFoundException(`Not found post with id ${postId}`)}
  Object.assign(post, body);
  return post.save();
};

// example of forbidden exception throwing
const removePost = async (postId, userId) => {
  const post = await checkPostAvailability(postId, userId);
  await post.deleteOne().exec();

  // const post = await findOneAndDelete({_id: postId, owner: userId});
  // if (!post) {throw new NotFoundException(`Not found post with id ${postId}`)}
};

module.exports = {
  getPosts,
  getPostById,
  removePost,
  addPost,
  updatePost,
};
