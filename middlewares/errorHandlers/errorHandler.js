const logger = require('../../utils/logger');

module.exports = (err, req, res, next) => {
  logger.error(err.stack); // Log the stack trace of the error
  res.status(500).json({code: 500, message: 'Internal Server Error' });
};
