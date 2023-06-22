const {promptGeneratorCV} = require('../utils/promptGeneratorCV');
const openaiService = require('./openAi.service');

generateSummary = async (body, db) => {

    const { cv_content, uid } = body;

    try {
        const prompt = await promptGeneratorCV({cv_content});
        const summary_of_cv = await openaiService.fetchData(prompt);

        // Store the summary in Firestore
        const docRef = db.collection('cvSummaries').doc(uid);
        await docRef.set({
            applicant_cv_summary: summary_of_cv,
        });

        return({code: 201, message: 'CV summary stored successfully'});
    } catch (err) {
        throw err;
    }
};

module.exports = {
    generateSummary
};
