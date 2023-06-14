// imports
const express = require('express');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const logger = require('./utils/logger');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// routes
const mailChimpRouter = require('./routes/mailchimp.route');
const firebaseRouter = require('./routes/firebase.route');
const openAiRouter = require('./routes/openai.route');
const swaggerRoute = require('./routes/docs.route');

require('dotenv').config();

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore(); // Get a Firestore instance

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

// Attach db to req object
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use('/api/firebase', firebaseRouter);
app.use('/api/mailchimp', mailChimpRouter);
app.use('/api/openai', openAiRouter);
app.use('/api-docs', swaggerRoute);

// If no route matched by this point, return a 404 Not Found error
app.use((req, res, next) => {
  res.status(404).json({code: 404, message: 'Resource not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack); // Log the stack trace of the error
  res.status(500).json({code: 500, message: 'Internal Server Error' });
});

// Use environment variable for port, fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server Started at ${PORT}`);
  console.log(`Server Started at ${PORT}`);
});
