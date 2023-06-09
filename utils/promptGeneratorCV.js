const { promptCv } = require("../data/promptCv");

const promptGeneratorCV = async ({cv_content}) => {
        const prompt = 
        promptCv.promptCv  + cv_content;

        return prompt;
}

module.exports = {promptGeneratorCV};