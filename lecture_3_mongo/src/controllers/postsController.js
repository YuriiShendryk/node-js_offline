const {
    addPost,
    getPostById,
    getPosts,
    removePost,
    updatePost
} = require('../services/postsService')

const { statusCode } = require("../helpers/constants")



const getAllPosts = async (req, res, next) => { 
    console.log(req.db);
    try {
        const posts = await getPosts();
        res.status(statusCode.OK).json(posts);
    } catch (error) {
        next(error);
    }
}

const getPost = async (req, res, next) => { 
    try {
        const { id } = req.params;
        const post = await getPostById(id);
        if (!post) {
            return next({
                status: statusCode.NOT_FOUND,
                message: 'Not found',
            });
        } 
        res.status(statusCode.OK).json(post);
  } catch (error) {
    next(error);
  }
}


const createPost = async (req, res, next) => { 
    try {
        const newPost = await addPost(req.body);
        res.status(statusCode.CREATED).json(newPost);
    } catch (error) {
        next(error);
    }
}

const updateOnePost = async (req, res, next) => { 
    try {
        const { postId } = req.params;
        const post = await getPostById(postId);
        
        if (!post) { 
            return next({
                status: statusCode.BAD_REQUEST,
                message: `Not found post with id ${postId}`,
            });
        }
        const updatedPost = await updatePost(postId, req.body);
        res.status(statusCode.OK).json(updatedPost);
    } catch (error) {
        next(error);
    }
}


const deletePost = async (req, res, next) => { 
    try {
        const id = req.params.postId;
        const postToDelete = await getPostById(id);
        if (!postToDelete) {
            return next({
            status: statusCode.BAD_REQUEST,
            message: `Not found post with id ${id}`,
            });
        };
        const newPostList = await removePost(id);
        res.status(statusCode.OK).json(newPostList);
    } catch (error) {
        next(error);
  }
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updateOnePost,
    deletePost
}