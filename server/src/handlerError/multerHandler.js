const { MulterError } = require('multer');
const BadRequestErrorrequire = require('../errors/BadRequestError');
const BadRequestError = require('../errors/BadRequestError');

module.exports = async (err, req, res, next) => {
  if (err instanceof MulterError) {
    return next(new BadRequestError('Invalid file'));
  }
  next(err);
};
