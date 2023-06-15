function validateApiKey(req, res, next) {

  const clientApiKey = req.get('X-API-KEY');
  // Get the valid API keys from an environment variable. This could also be a database call.
  // The keys are assumed to be in a comma-separated string.
  const validApiKeys = process.env.API_KEYS.split(',');
  
     // Check if the clients's API key is in the list of valid keys
  if (validApiKeys.includes(clientApiKey)) {
    next();
  } else {
    res.status(401).json({code: 401, message: 'Invalid API Key' });
  }
}
  
module.exports = validateApiKey;
  