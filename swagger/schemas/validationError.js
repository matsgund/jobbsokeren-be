module.exports = {
    type: 'object',
    properties: {
        code: {
            type: 'integer',
            format: 'int32',
            description: 'The status code of the response'
        },
        errors: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    type: {
                        type: 'string',
                        description: 'The type of the error'
                    },
                    msg: {
                        type: 'string',
                        description: 'The error message'
                    },
                    path: {
                        type: 'string',
                        description: 'The path where the error occurred'
                    },
                    location: {
                        type: 'string',
                        description: 'The location where the error occurred'
                    }
                }
            }
        }
    },
    example: {
        statusCode: 422,
        errors: [
            {
                type: 'validationError',
                msg: 'Cv content is required',
                path: 'cv_content',
                location: 'body'
            },
            {
                type: 'validationError',
                msg: 'User id is required',
                path: 'uid',
                location: 'body'
            }
        ]
    }
};