const express = require('express');
const router = express.Router();
const firebaseController = require('../controllers/firebase.controller');
const { validateCvContent } = require('../middlewares/validation/firebase.validation');


/**
 * @swagger
 * tags:
 *   name: Firebase
 *   description: API to manage Firebase requests
 */

/** 
 * @swagger
 *   /api/firebase/firebase-store-cv-content:
 *     post:
 *       summary: Stores CV content in Firebase
 *       tags: [Firebase]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FirebaseStoreCVContent'
 *       responses:
 *         "201":
 *           $ref: '#/components/responses/201'
 *         "404":
 *           $ref: '#/components/responses/404'
 *         "422":
 *           $ref: '#/components/responses/422'
 *         "500":
 *           $ref: '#/components/responses/500'
 */
router.post('/firebase-store-cv-content', validateCvContent, firebaseController.storeCvContent);

module.exports = router;

