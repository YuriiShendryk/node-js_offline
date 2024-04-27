const express = require('express');
const { asyncWrapper } = require('../helpers/apiHelpers');
const { registerUserController, loginUserController } = require('../controllers/authController');
const router = express.Router();
const { validate } = require('../middlewares/valdation');
const { schemaCreateUser, schemaCredentialsUser } = require('../middlewares/userValidaiton');

router.post('/signUp', validate(schemaCreateUser), asyncWrapper(registerUserController));
router.post('/signIn', validate(schemaCredentialsUser), asyncWrapper(loginUserController));

module.exports = router;
