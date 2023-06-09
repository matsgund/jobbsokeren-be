const { promptDefault } = require("../data/promptJobApplication");

const promptGeneratorJobApplication = async ({
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

module.exports = {promptGeneratorJobApplication};