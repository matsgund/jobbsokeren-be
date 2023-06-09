const { promptCv } = require("../data/promptCvSummary");

const promptGeneratorCV = async ({cv_content}) => {
        const prompt = 
        promptCv.promptCv  + cv_content;

        return prompt;
}

module.exports = {promptGeneratorCV};