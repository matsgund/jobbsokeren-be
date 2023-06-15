module.exports = {
    OpenAiGenerateJobApplicationSuccess: {
        description: 'Generate job application data',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/OpenAiGenerateJobApplicationSuccess'
                }
            }
        }
    },
    OpenAiGenerateExportSuccess: {
        description: 'Generate export data',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/OpenAiGenerateExportSuccess'
                }
            }
        }
    },
    200 : {
        description: 'Ok - the request was successful',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/SuccessResponse'
                }
            }
        }
    },
    201: {
        description: 'Created - the request was successful and a resource was created',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/CreatedResponse'
                }
            }
        }
    },
    400: {
        description: 'Bad Request - the request was malformed',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/BadRequestError'
                }
            }
        }
    },
    401: {
        description: 'Unauthorized - incorrect API key or incorrect format',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/UnauthorizedError'
                }
            }
        }
    },
    404: {
        description: 'Not Found - the requested resource was not found',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/NotFoundError'
                }
            }
        }
    },
    422: {
        description: 'Unprocessable Entity - the request was well-formed but was unable to be followed due to semantic errors',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/ValidationError'
                }
            }
        }
    },
    500: {
        description: 'Internal Server Error - the request was not completed due to an internal error on the server side',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/ServerError'
                }
            }
        }
    }
}
