const { promptDefault } = require("../data/promptDefault");

const promptGenerator = async ({
    employer_job_title,
    employer_name,
    employeer_keywords,
    employeer_job_description}) => {

        const prompt = 
        promptDefault.promptDefault  +
        "arbeidstaker: " + employer_name  + "stillingstittel: " +  employer_job_title + 
        "nøkkelord: " + employeer_keywords + "stillingsbeskrivelse: "
        employeer_job_description;

        return prompt;
}

module.exports = {promptGenerator};