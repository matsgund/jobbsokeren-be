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
            summary: summary_of_cv,
        });

        return { message: 'CV summary stored successfully', summary: summary_of_cv };
    } catch (err) {
        console.error(`Error while generating summary`, err.message);
        throw err;
    }
};

module.exports = {
    generateSummary
};
