const express = require('express');
const routes = require('./routes/routes');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const logger = require('./utils/logger');
require('dotenv').config();


// Configure the rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Middleware ordering
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: process.env.CORS_ORIGIN.split(',') 
}));
app.use('/job-application-data', apiLimiter);
app.use('/api', routes);

// Use environment variable for port, fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server Started at ${PORT}`);
  console.log(`Server Started at ${PORT}`);
});
