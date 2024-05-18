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
const {
asyncWrapper
} = require('../helpers/apiHelpers')


router.get('/', asyncWrapper(getAllPosts))
router.get('/:id', asyncWrapper(getPost))
router.post('/', validateCreatePost, asyncWrapper(createPost))
router.put('/:postId', validateUpdatePost, asyncWrapper(updateOnePost))
router.delete('/:postId', asyncWrapper(deletePost))



module.exports = router;