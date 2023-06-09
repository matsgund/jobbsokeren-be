const cvService = require('../services/firebase.service');

// POST /api/firebase/firebase-store-cv-content
async function storeCvContent(req, res, next) {
    try {
        const { cv_content, uid } = req.body;
        res.json(await cvService.generateSummary(cv_content, uid, req.db));
    } catch (err) {
        console.error(`Error while storing CV content`, err.message);
        next(err);
    }
};

module.exports = {
    storeCvContent
};
