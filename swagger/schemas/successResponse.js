module.exports = {
    type: 'object',
    properties: {
        code: {
            type: 'integer',
            format: 'int32',
            description: 'The status code of the response',
        },
        message: {
            type: 'string',
            description: 'Description of the response',
        },
    },
    required: ['code', 'message'],
    example: {
        code: 200,
        message: 'Ok - the request was successful',
    } 
};
