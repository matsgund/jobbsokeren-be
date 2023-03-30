const express = require('express');
const router = express.Router()
const { getWebContent } = require('../utils/webCrawler');

router.post('/jobApplicationData', async (req, res) => {
    const targetURL = req.body.applicant_job_advertisement_url;

    try {
        // simulate a delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        const jobApplicationResult = await getWebContent(targetURL);
        jobApplicationResult.applicant_name = req.body.applicant_name;
        jobApplicationResult.applicant_email = req.body.applicant_email;
        jobApplicationResult.applicant_address = req.body.applicant_address;
        jobApplicationResult.applicant_city = req.body.applicant_city;
        jobApplicationResult.applicant_zip_code = req.body.applicant_zip_code;
        res.json(jobApplicationResult);
    } catch (error) {
        console.log(error);
    } 
});

module.exports = router;