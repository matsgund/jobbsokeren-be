// imports
const express = require('express');
const app = express();
const logger = require('./utils/logger');

// routes
const mailChimpRouter = require('./routes/mailchimp.route');
const firebaseRouter = require('./routes/firebase.route');
const openAiRouter = require('./routes/openai.route');
const swaggerRoute = require('./routes/docs.route');

// middleware
const rateLimiter = require('./middlewares/rateLimiter');
const cors = require('./middlewares/cors');
const bodyParser = require('./middlewares/bodyParser');
const firebaseDbInitializer = require('./middlewares/firebaseDbInitializer');
const notFoundHandler = require('./middlewares/errorHandlers/notFound');
const errorHandler = require('./middlewares//errorHandlers/errorHandler');
const apiKeyValidator = require('./middlewares/apiKeyValidator');

require('dotenv').config();

// Middleware ordering
app.use(rateLimiter); // Apply rate limiter to all routes
app.use(bodyParser.json);
app.use(bodyParser.urlencoded);
app.use(cors);
app.use(firebaseDbInitializer);

// Routes
app.use('/api/firebase', apiKeyValidator, firebaseRouter);
app.use('/api/mailchimp', apiKeyValidator, mailChimpRouter);
app.use('/api/openai', apiKeyValidator, openAiRouter);
app.use('/api-docs', swaggerRoute);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Use environment variable for port, fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server Started at ${PORT}`);
  console.log(`Server Started at ${PORT}`);
});
