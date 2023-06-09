// routes/cv.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const cvController = require('../controllers/firebase.controller');

router.post('/firebase-store-cv-content', [
    check('cv_content')
        .notEmpty().withMessage('Cv content is required')
        .isString().withMessage('Cv content must be a string'),
    check('uid')
        .notEmpty().withMessage('User id is required')
        .isString().withMessage('User id must be a string')
],
cvController.storeCvContent);

module.exports = router;
