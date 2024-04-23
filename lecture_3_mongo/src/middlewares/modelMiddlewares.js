const { collections } = require('../model/collections');

module.exports = (req, res, next) => {
    req.db = collections;
    next()
 }