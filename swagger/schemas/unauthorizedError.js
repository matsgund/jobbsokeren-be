module.exports = {
    type: 'object',
    properties: {
        code: {
            type: 'string',
        },
        message: {
            type: 'string'
        },
    },
    required: ['code', 'message'],
    example: {
        code: '401',
        message: 'Unauthorized'
    }
};
