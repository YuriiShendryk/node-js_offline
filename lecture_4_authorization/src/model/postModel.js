const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    uniq: true,
  },
  text: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post };
