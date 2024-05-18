const express = require('express');

const router = express.Router();

const { getAllMessagesController } = require('../controllers/messagesController');

const { asyncWrapper } = require('../helpers/apiHelpers');

router.get('/', asyncWrapper(getAllMessagesController));

module.exports = router;
