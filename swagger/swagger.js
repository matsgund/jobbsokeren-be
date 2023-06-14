const info = require('./info');
const servers = require('./servers');
const components = require('./components');
const security = require('./security');

const options = {
    definition: {
      openapi: "3.0.0",
      info,
      servers,
      components, 
      security,
    },
    apis: ["./routes/*.js"],
}

module.exports = options
  