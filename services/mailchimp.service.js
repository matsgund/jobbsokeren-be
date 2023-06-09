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
        return results;
    } catch (err) {
        console.error(`Error in subscribeToMailchimp: ${err}`);
        throw err;
    }
};

module.exports = {
    subscribeToMailchimp
};
