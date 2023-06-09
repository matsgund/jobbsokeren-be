const cvService = require('../services/firebase.service');

// POST /api/firebase/firebase-store-cv-content
async function storeCvContent(req, res, next) {
    try {
        res.json(await cvService.generateSummary(req.body, req.db));
    } catch (err) {
        logger.error(`Error while storing CV content`, err.message);
        next(err);
    }
};

module.exports = {
    storeCvContent
};
