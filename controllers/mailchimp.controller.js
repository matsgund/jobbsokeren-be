const mailchimpService = require('../services/mailchimp.service');

// POST /api/firebase/firebase-store-cv-content
subscribe = async (req, res, next) => {
    try {
        res.json(await mailchimpService.subscribeToMailchimp(req.body));
    } catch (err) {
        console.error(`Error in /subscribe-to-mailchimp: ${err}`);
        next(err);
    }
};

module.exports = {
    subscribe
};
