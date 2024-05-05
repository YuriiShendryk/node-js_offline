const express = require('express');
const { asyncWrapper } = require('../helpers/apiHelpers');
const { registerUserController, loginUserController, verifyUserController, forgotPasswordController, resetPasswordController } = require('../controllers/authController');
const router = express.Router();
const { validate } = require('../middlewares/valdation');
const { schemaCreateUser, schemaCredentialsUser,  } = require('../middlewares/userValidaiton');

router.post('/signUp', validate(schemaCreateUser), asyncWrapper(registerUserController));
router.get('/verify/:code', asyncWrapper(verifyUserController));
router.post('/signIn', validate(schemaCredentialsUser), asyncWrapper(loginUserController));
router.post('/forgot_password', asyncWrapper(forgotPasswordController));
router.post('/reset_password', asyncWrapper(resetPasswordController));

module.exports = router;
