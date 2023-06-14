const { check, validationResult } = require('express-validator');

const validateCvContent = [
    check('cv_content')
        .notEmpty().withMessage('Cv content is required')
        .isString().withMessage('Cv content must be a string'),
    check('uid')
        .notEmpty().withMessage('User id is required')
        .isString().withMessage('User id must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({code: 422, message: "validation error", errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateCvContent
};
