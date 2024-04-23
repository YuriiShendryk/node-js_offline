const Joi = require('joi');
const { statusCode } = require('../helpers/constants');

const validate = (shema, body, next) => {
  if (Object.keys(body).length === 0) {
    return next({
      status: statusCode.BAD_REQUEST,
      message: 'missing fields',
    });
  }
  const { error } = shema.validate(body);
  if (error) {
    const [{ message }] = error.details;
    return next({
      status: statusCode.BAD_REQUEST,
      message: `${message.replace(/"/g, '')}`,
    });
  }
  next();
};

const schemaCreatePost = Joi.object({
  title: Joi.string().alphanum().min(3).max(30).required(),
  topic: Joi.string().alphanum().min(3).max(8).required()
});

const schemaUpdatePost = Joi.object({
  title: Joi.string().alphanum().min(3).max(30).optional(),
  topic: Joi.string().alphanum().min(3).max(8).optional()
});

const validateCreatePost = (req, res, next) => {
  return validate(schemaCreatePost, req.body, next);
};

const validateUpdatePost = (req, res, next) => {
  return validate(schemaUpdatePost, req.body, next);
};



module.exports = {
  validateCreatePost,
  validateUpdatePost,
};