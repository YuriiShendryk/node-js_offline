const express = require('express');

const router = express.Router();

const {
    getAllPosts,
    getPost,
    createPost,
    updateOnePost,
    deletePost
} = require('../controllers/postsController')

const {
    validateCreatePost,
    validateUpdatePost
} = require('../middlewares/postsValidation')


router.get('/', getAllPosts)
router.get('/:id', getPost)
router.post('/', validateCreatePost, createPost)
router.put('/:postId', validateUpdatePost, updateOnePost)
router.delete('/:postId', deletePost)



module.exports = router;