const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const posts = path.join(__dirname, '../model/posts.json');

const getPosts = async () => {
  try {
    const postsList = await fs.readFile(posts, 'utf8');
    const parsedPostsList = JSON.parse(postsList);
    return parsedPostsList;
  } catch (error) {
    throw error;
  }
};

const getPostById = async (postId) => {
  try {
    const postsList = await getPosts();
    const postById = postsList.find(({ id }) => postId === id);
    return postById;
  } catch (error) {
    throw error;
  }
};

const addPost = async body => {
  try {
    const postsList = await getPosts();
    const newPost = { id: uuidv4(), ...body };
    const newPostList = [...postsList, newPost];
    await fs.writeFile(posts, JSON.stringify(newPostList), 'utf8');
    return newPost;
  } catch (error) {
    throw error;
  }
};


const updatePost = async (postId, body) => {
  try {
    const initialPost = await getPostById(postId);
    const postsList = await getPosts();
    const updatedPost = { ...initialPost, ...body };
    const updatedPostList = postsList.map(post =>
      post.id === postId ? updatedPost : post
    );
    await fs.writeFile(posts, JSON.stringify(updatedPostList), 'utf8');
    return updatedPost;
  } catch (error) {
    throw error;
  }
};


const removePost = async (postId) => {
  try {
    const postsList = await getPosts();
    const newPostsList = postsList.filter(
      ({ id }) => postId !== id
    );
    console.log({ newPostsList });
    await fs.writeFile(posts, JSON.stringify(newPostsList), 'utf8');
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