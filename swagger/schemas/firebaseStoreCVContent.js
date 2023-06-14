module.exports = {
    type: 'object',
    required: ['cv_content', 'uid'],
    properties: {
        cv_content: {
            type: 'string',
            description: 'The content of the CV'
        },
        uid: {
            type: 'string',
            description: 'The users id'
        }
    },
    example: {
        cv_content: 'This is a CV content',
        uid: '123456789'
    }
};
