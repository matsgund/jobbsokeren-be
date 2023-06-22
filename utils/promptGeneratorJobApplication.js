const { promptDefault } = require("../data/promptJobApplication");
const { promptWithCv } = require("../data/promptJobApplicationWithCV");

const promptGeneratorJobApplication = async (jobApplicationResult, applicant_cv_summary) => {

    const {
        employer_job_title,
        employer_name,
        employeer_keywords,
        employeer_job_description
    } = jobApplicationResult;

    if (applicant_cv_summary) {
        return   promptWithCv.promptWithCv  +
        "arbeidstaker: " + employer_name  + "stillingstittel: " +  employer_job_title + 
        "nøkkelord: " + employeer_keywords + "stillingsbeskrivelse: " +
        employeer_job_description + "kvalifikasjonene til søkeren: " + applicant_cv_summary;
    } else {
        return   promptDefault.promptDefault  +
        "arbeidstaker: " + employer_name  + "stillingstittel: " +  employer_job_title + 
        "nøkkelord: " + employeer_keywords + "stillingsbeskrivelse: " +
        employeer_job_description;
    }

  
}

module.exports = {promptGeneratorJobApplication};
