const { ObjectId } = require('mongodb');
const { getCollections } = require('../model/collections');

const collections = getCollections();

const getPosts = async () => {
  try {
    const { Posts } = collections;
    const postsList = await Posts.find({}).toArray();
    return postsList;
  } catch (error) {
    throw error;
  }
};

const getPostById = async (postId) => {
  try {
    const { Posts } = collections;
    const post = await Posts.findOne({_id: new ObjectId(postId)});
    return post;
  } catch (error) {
    throw error;
  }
};

const addPost = async body => {
  try {
    const { Posts } = collections;
    const newPost = await Posts.insertOne(body);
    const savedPost = await getPostById(newPost.insertedId);
    return savedPost;
  } catch (error) {
    throw error;
  }
};


const updatePost = async (postId, body) => {
  try {
    const { Posts } = collections;
    await Posts.updateOne({ _id: new ObjectId(postId) }, { $set: body });
    const updatedPost = await getPostById(postId);
    return updatedPost;
  } catch (error) {
    throw error;
  }
};


const removePost = async (postId) => {
  try {
    const { Posts } = collections;
    await Posts.deleteOne({ _id: new ObjectId(postId) })
    const newPostsList = await getPosts();
    return newPostsList;
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