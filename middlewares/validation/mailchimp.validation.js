const { check, validationResult } = require('express-validator');

const valdidateMailToMailchimp = [
    check('email_address')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),
    check('status')
        .notEmpty().withMessage('Status is required')
        .isString().withMessage('Status must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({statusCode: 422, errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    valdidateMailToMailchimp
};
