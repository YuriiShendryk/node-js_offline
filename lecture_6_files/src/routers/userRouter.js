const express = require('express');
const router = express.Router();

const { asyncWrapper } = require('../helpers/apiHelpers');
const { updateUserAvatarController } = require('../controllers/userController');

const {
  authGuard,
} = require('../middlewares/authGuard');
const {
  uploadAvatarMiddleware,
} = require('../middlewares/fileUpload');


router.patch(
  '/avatars',
  authGuard,
  uploadAvatarMiddleware.single('avatar'),
  asyncWrapper(updateUserAvatarController)
);

module.exports = router;
