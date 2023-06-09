const { check, validationResult } = require('express-validator');

const valdidateEditorUserInput = [
       check('applicant_job_advertisement_url')
       .notEmpty().withMessage('Please provide a valid URL')
       .matches(/^https:\/\/www\.finn\.no\/job\//).withMessage('URL must start with "https://www.finn.no/job/"')
       .isURL().withMessage('Please provide a valid URL'),
   check('applicant_name')
       .isString().withMessage('Name must be a string')
       .matches(/^[a-zA-Z\s]+$/).withMessage('Name can only contain letters and spaces')
       .notEmpty().withMessage('Please provide a valid name'),
   check('applicant_email')
       .notEmpty().withMessage('Please provide a valid email address')
       .isEmail().withMessage('Please provide a valid email address'),
   check('applicant_address')
       .notEmpty().withMessage('Please provide a valid address')
       .isString().withMessage('Address must be a string')
       .matches(/^[a-zA-Z0-9\s.,-/æøåÆØÅ]+$/).withMessage('Address can only contain letters, numbers, spaces, and . , - / characters'),
   check('applicant_city')
       .isString(/^[a-zA-Z\s]+$/).withMessage('City must be a string')
       .notEmpty().withMessage('Please provide a valid city'),
   check('applicant_zip_code')
       .notEmpty().withMessage('Please provide a valid zip code')
       .isNumeric().withMessage('Zip code must be a number')
       .isLength({ min: 4, max: 4 }).withMessage('Zip code must be exactly 4 digits'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({statusCode: 422, errors: errors.array() });
        }
        next();
    }
];


const validateEditorDocument = [
    check('htmlData')
        .notEmpty().withMessage('HTML data is required')
        .isString().withMessage('HTML data must be a string'),
    check('type')
        .notEmpty().withMessage('Type is required')
        .isIn(['pdf', 'docx']).withMessage('Type must be either "pdf" or "docx"'), 
 (req, res, next) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(422).json({statusCode: 422, errors: errors.array() });
     }
     next();
 }
];



module.exports = {
    valdidateEditorUserInput,
    validateEditorDocument
};
