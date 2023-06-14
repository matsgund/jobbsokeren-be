const express = require('express');
const router = express.Router();
const mailchimpController = require('../controllers/mailchimp.controller');
const { valdidateMailToMailchimp } = require('../middlewares/validation/mailchimp.validation');

/**
 * @swagger
 * tags:
 *   name: Mailchimp
 *   description: API to manage Mailchimp requests
 */

/** 
 * @swagger
 *   /api/mailchimp/subscribe-to-mailchimp:
 *     post:
 *       summary: Subscribe to Mailchimp list
 *       tags: [Mailchimp]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MailchimpSubscribe'
 *       responses:
 *         "200":
 *           $ref: '#/components/responses/200'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "404":
 *           $ref: '#/components/responses/404'
 *         "422":
 *           $ref: '#/components/responses/422'
 *         "500":
 *           $ref: '#/components/responses/500'
 */
router.post('/subscribe-to-mailchimp', valdidateMailToMailchimp, mailchimpController.subscribe);

module.exports = router;
