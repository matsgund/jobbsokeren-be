const axios = require('axios'); 
const cheerio = require('cheerio'); 

// TODO needs to be validated!!!!
const jobApplicationResult = {
    employer_job_title: '',
    employer_name: '',
    employeer_address: '',
    employer_zip_code: '',
    employeer_keywords: '',
    employeer_job_description: '',
};
 
const getWebContent = async (targetURL) => {

    try {
        const response = await axios.get(targetURL);
        const body = response.data;
        const $ = cheerio.load(body);
        jobApplicationResult.employer_job_title = $('.definition-list dt:contains("Stillingstittel") + dd').first().text() || '';
        jobApplicationResult.employer_name = $('.definition-list dt:contains("Arbeidsgiver") + dd').text()  || '';
        jobApplicationResult.employeer_address =  $('.definition-list dt:contains("Sted") + dd').text().split(',')[0].trim() || '';
        jobApplicationResult.employer_zip_code = $('.definition-list dt:contains("Sted") + dd').text().split(',')[1].trim() || '';
        jobApplicationResult.employeer_keywords = $('.panel h2:contains("Nøkkelord") + p').text() || '';
        jobApplicationResult.employeer_job_description = $('.import-decoration').text() || '';
    } catch (error) {
        console.log(error);
    }

    return jobApplicationResult;

}

module.exports = { getWebContent };
