const cvService = require('../services/firebase.service');

// @desc Creates a new CV summary
// @route POST /api/firebase/firebase-store-cv-content
// @access Public
async function storeCvContent(req, res, next) {
    try {
        res.status(201).json(await cvService.generateSummary(req.body, req.db));
    } catch (err) {
        next(err);
    }
};

module.exports = {
    storeCvContent
};
