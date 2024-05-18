const { Post } = require('../model/postModel');

const getPosts = async () => {
  try {
    
    const postsList = await Post.find();
    return postsList;
  } catch (error) {
    throw error;
  }
};

const getPostById = async (postId) => {
  try {
    
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    throw error;
  }
};

const addPost = async body => {
  try {
    
    const newPost = await Post.create(body);
    return newPost;
  } catch (error) {
    throw error;
  }
};


const updatePost = async (postId, body) => {
  try {
   const updatedPost = await Post.findByIdAndUpdate(postId, { $set: body }, {new: true});
    return updatedPost;
  } catch (error) {
    throw error;
  }
};

const removePost = async (postId) => {
  try {  
    const deleteObject = await Post.findByIdAndDelete(postId);
    return deleteObject;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getPosts,
  getPostById,
  removePost,
  addPost,
  updatePost,
};