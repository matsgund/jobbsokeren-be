const express = require('express');
const routes = require('./routes/routes');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const logger = require('./utils/logger');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
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
app.use('/api', routes);

// Use environment variable for port, fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server Started at ${PORT}`);
  console.log(`Server Started at ${PORT}`);
});
