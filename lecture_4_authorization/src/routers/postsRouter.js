const express = require('express');

const router = express.Router();

const {
  getAllPostsController,
  getPostController,
  createPostController,
  updateOnePostController,
  deletePostController,
} = require('../controllers/postsController');

const { validate } = require('../middlewares/valdation');
const { schemaCreatePost, schemaUpdatePost } = require('../middlewares/postsValidation');
const { authGuard } = require('../middlewares/authGuard');
const { asyncWrapper } = require('../helpers/apiHelpers');

router.get('/', authGuard, asyncWrapper(getAllPostsController));
router.get('/:id', authGuard, asyncWrapper(getPostController));
router.post('/', authGuard, validate(schemaCreatePost), asyncWrapper(createPostController));
router.put('/:postId', authGuard, validate(schemaUpdatePost), asyncWrapper(updateOnePostController));
router.delete('/:postId', authGuard, asyncWrapper(deletePostController));

module.exports = router;
