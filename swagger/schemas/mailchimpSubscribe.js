module.exports = {
    type: 'object',
    required: ['email_address', 'status'],
    properties: {
        email_address: {
            type: 'string',
            description: 'The users email address'
        },
        status: {
            type: 'string',
            description: 'The users status'
        }
    },
    example: {
        email_address: 'olaNordmann4@hotmail.com',
        status: 'subscribed'
    }
};
