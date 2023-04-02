const { promptDefault } = require("../data/promptDefault");

const promptGenerator = async ({
    employer_job_title,
    employer_name,
    employeer_keywords,
    employeer_job_description}) => {

        const prompt = 
        promptDefault.promptDefault + 
        employer_name + employer_job_title + 
        employeer_keywords + 
        employeer_job_description;

        return prompt;
}

module.exports = {promptGenerator};