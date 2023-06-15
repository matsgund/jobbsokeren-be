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
        code: '404',
        message: 'Resource not found'
    }
};