const Joi = require('joi');

const schemaCreatePost = Joi.object({
  title: Joi.string().alphanum().min(3).max(30).required(),
  topic: Joi.string().alphanum().min(3).max(8).required(),
  text: Joi.string().alphanum().min(3).max(8).required(),
});

const schemaUpdatePost = Joi.object({
  title: Joi.string().alphanum().min(3).max(30).optional(),
  topic: Joi.string().alphanum().min(3).max(8).optional(),
});

module.exports = {
  schemaCreatePost,
  schemaUpdatePost,
};
