module.exports = {
    ApiKeyAuth: {
        // this name will be used in the "security" section
        type: 'apiKey',
        in: 'header', // can be 'header', 'query' or 'cookie'
        name: 'x-api-key' // name of the header, query parameter or cookie
    }
};
