const {
    addPost,
    getPostById,
    getPosts,
    removePost,
    updatePost
} = require('../services/postsService')

const { statusCode } = require("../helpers/constants")



const getAllPosts = async (req, res, next) => {     
        const posts = await getPosts();
    res.status(statusCode.OK).json(posts);
}

const getPost = async (req, res, next) => { 
    
        const { id } = req.params;
        const post = await getPostById(id);
        if (!post) {
            return next({
                status: statusCode.NOT_FOUND,
                message: 'Not found',
            });
        } 
        res.status(statusCode.OK).json(post);
 
}


const createPost = async (req, res, next) => { 
    
        const newPost = await addPost(req.body);
        res.status(statusCode.CREATED).json(newPost);
    
}

const updateOnePost = async (req, res, next) => { 
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
    }



const deletePost = async (req, res) => { 
        const id = req.params.postId;
        const newPostList = await removePost(id);
        res.status(statusCode.OK).json(newPostList);
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updateOnePost,
    deletePost
}