const mailchimpService = require('../services/mailchimp.service');
const logger = require('../utils/logger');

// POST /api/firebase/firebase-store-cv-content
subscribe = async (req, res, next) => {
    try {
        res.json(await mailchimpService.subscribeToMailchimp(req.body));
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
