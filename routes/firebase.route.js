const express = require('express');
const router = express.Router();
const firebaseController = require('../controllers/firebase.controller');
const { validateCvContent } = require('../middlewares/validation/firebase.validation');


// POST /api/firebase/firebase-store-cv-content
router.post('/firebase-store-cv-content', validateCvContent, firebaseController.storeCvContent);

module.exports = router;
