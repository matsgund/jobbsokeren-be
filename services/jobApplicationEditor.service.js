const { getWebContent } = require('../utils/webCrawler');
const openaiService = require('./openAi.service');
const { promptGeneratorJobApplication } = require('../utils/promptGeneratorJobApplication');
const { textToHtml } = require('../utils/textToHtml');
const wkhtmltopdf = require('wkhtmltopdf');
const { Readable } = require('stream');
const htmlToDocx = require('html-to-docx');

generate = async (body) => {
    const targetURL = body.applicant_job_advertisement_url;
    const jobApplicationResult = await getWebContent(targetURL);
    const prompt = await promptGeneratorJobApplication(jobApplicationResult, body.applicant_cv_summary);
    const coverLetter = await openaiService.fetchData(prompt);
    const htmlCoverLetter = await textToHtml(coverLetter);
    jobApplicationResult.applicant_name = body.applicant_name;
    jobApplicationResult.applicant_email = body.applicant_email;
    jobApplicationResult.applicant_address = body.applicant_address;
    jobApplicationResult.applicant_city = body.applicant_city;
    jobApplicationResult.applicant_zip_code = body.applicant_zip_code;
    jobApplicationResult.applicant_cover_letter = htmlCoverLetter;
    return ({ code: 200, message:"Job Application was successfully created!", data: jobApplicationResult });
};


exportFile = async (body) => {
    try {
        const { htmlData, type } = body;
        if (type === 'pdf') {
            const options = {
                pageSize: 'A4',
                marginTop: '0.7in',
                marginRight: '1in',
                marginBottom: '0.7in',
                marginLeft: '1in',
            };
            const pdfStream = wkhtmltopdf(htmlData, options);
            return { stream: pdfStream, type: 'pdf' };
        }
        if (type === 'docx') {
            const buffer = await htmlToDocx(htmlData);
            const stream = Readable.from(buffer);
            return { stream, type: 'docx' };
        }
    } catch (error) {
        throw error;
    }
};



module.exports = {
    generate,
    exportFile
};

