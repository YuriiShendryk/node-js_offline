const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
    },
  },
  { timestamps: { createdAt: true } }
);

const Message = mongoose.model('Message', MessageSchema);

module.exports = { Message };
