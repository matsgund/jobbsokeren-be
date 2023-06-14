require('dotenv').config();
const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

subscribeToMailchimp = async (body) => {

    const requestBody = {
        email_address : body.email_address,
        status : body.status
    }
    
    try {
        const results = await mailchimp.post('/lists/2127c259b3/members', requestBody);
        if (results.statusCode === 200) {
            return ({code: 200, message: 'Email added to list'})
        } else {
            throw new Error('Error subscribing to Mailchimp');
        }
    } catch (err) {
        throw err;
    }
};

module.exports = {
    subscribeToMailchimp
};
