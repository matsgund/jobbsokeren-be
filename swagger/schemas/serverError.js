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
        code: '500',
        message: 'Internal server error'
    }
};