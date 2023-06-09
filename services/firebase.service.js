
const promptGeneratorCV = require('../utils/promptGeneratorCV');
const openAIFetchData = require('../utils/openAIFetchData');

generateSummary = async (cv_content) => {
    const prompt = await promptGeneratorCV({cv_content});
    const summary_of_cv = await openAIFetchData(prompt);
    return summary_of_cv;
};

module.exports = {
    generateSummary
};
