const mailchimpService = require('../services/mailchimp.service');
const logger = require('../utils/logger');

// @desc Subscribe to Mailchimp
// @route POST /api/mailchimp/subscribe-to-mailchimp
// @access Public
subscribe = async (req, res, next) => {
    try {
        res.status(200).json(await mailchimpService.subscribeToMailchimp(req.body));
    } catch (err) {
        if (err.response && err.response.body && err.response.body.title === 'Member Exists') {
            logger.error(err.stack);
            res.status(400).json({code: 400, message: 'Email is already a list member'});
        } else {
            next(err);
        }
    }
};

module.exports = {
    subscribe
};
