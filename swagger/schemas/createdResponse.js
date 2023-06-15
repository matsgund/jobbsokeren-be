module.exports = {
    type: 'object',
    properties: {
        code: {
            type: 'integer',
            format: 'int32',
            description: 'The status code of the response',
        message: {
            type: 'string',
            description: 'Description of the response',
        },
    },
},
required: ['code', 'message'],
example: {
    code: 201,
    message: 'Created - the request was successful and a resource was created'
}
};