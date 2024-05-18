const { getMessages } = require('../services/messagesService');

const { statusCode } = require('../helpers/constants');

const getAllMessagesController = async (req, res) => {
  const messages = await getMessages();
  res.status(statusCode.OK).json(messages);
};

module.exports = {
  getAllMessagesController,
};
