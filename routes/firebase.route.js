const express = require('express');
const router = express.Router();
const firebaseController = require('../controllers/firebase.controller');
const { validateCvContent } = require('../middlewares/validation/firebase.validation');

// @desc Creates a new CV summary
// @route POST /api/firebase/firebase-store-cv-content
// @access Public
router.post('/firebase-store-cv-content', validateCvContent, firebaseController.storeCvContent);

module.exports = router;
