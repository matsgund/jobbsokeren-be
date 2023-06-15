module.exports = {
    type: 'object',
    required: ['htmlData', 'type'],
    properties: {
        htmlData: {
            type: 'string',
            description: 'The HTML data to be exported'
        },
        type: {
            type: 'string',
            description: 'The type of document to be exported'
        },
    },
    example: {
        htmlData: '<p>Viser til utlyst stilling...</p>',
        type: 'docx',        
    }
};
