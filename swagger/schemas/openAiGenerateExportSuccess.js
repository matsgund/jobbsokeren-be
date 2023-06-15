module.exports = {
    type: 'object',
    properties: {
        'application/pdf': {
            type: 'string',
            format: 'binary',
            description: 'PDF file stream',
        },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
            type: 'string',
            format: 'binary',
            description: 'DOCX file stream',
        },
    },
    example: {
        'application/pdf': 'binary data',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'binary data',
    },
};
