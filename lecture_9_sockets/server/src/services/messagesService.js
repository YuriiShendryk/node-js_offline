const { Message } = require('../model/messageModel');

const getMessages = async () => {
  const messages = await Message.find()
    .populate({ path: 'author', select: { email: 1, firstName: 1, lastName: 1 } })
    .exec();
  return messages;
};

const addMessage = async (body, userId) => {
  const newPost = await Message.create({ ...body, author: userId });
  return newPost;
};

module.exports = {
  getMessages,
  addMessage,
};
