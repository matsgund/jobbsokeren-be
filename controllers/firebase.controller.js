const { validationResult } = require('express-validator');
const cvService = require('../services/firebase.service');

storeCvContent = async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({statusCode: 422, errors: errors.array() });
    }

    const { cv_content, uid } = req.body;
    const summary_of_cv = await cvService.generateSummary(cv_content);

    // Store the summary in Firestore
    const docRef = req.db.collection('cvSummaries').doc(uid); // Use req.db instead of db
    await docRef.set({
        summary: summary_of_cv,
    });

    res.status(200).json({ message: 'CV summary stored successfully' });
};

module.exports = {
    storeCvContent
};