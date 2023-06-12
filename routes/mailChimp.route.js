const express = require('express');
const router = express.Router();
const mailchimpController = require('../controllers/mailchimp.controller');
const { valdidateMailToMailchimp } = require('../middlewares/validation/mailchimp.validation');

// @desc Subscribe to Mailchimp
// @route POST /api/mailchimp/subscribe-to-mailchimp
// @access Public
router.post('/subscribe-to-mailchimp', valdidateMailToMailchimp, mailchimpController.subscribe);

module.exports = router;
