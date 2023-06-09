const express = require('express');
const router = express.Router()
const { getWebContent } = require('../utils/webCrawler');
const { openAIFetchData } = require('../utils/openAiFetcher');
const { promptGeneratorJobApplication } = require('../utils/promptGeneratorJobApplication');
const { promptGeneratorCV } = require('../utils/promptGeneratorCV');
const { textToHtml } = require('../utils/textToHtml');
const { Readable } = require('stream');
const { check, validationResult } = require('express-validator');
const htmlToDocx = require('html-to-docx');
const logger = require('../utils/logger');
const wkhtmltopdf = require('wkhtmltopdf');
const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
require('dotenv').config();


router.post('/job-application-data', [
    // validate input 
    check('applicant_job_advertisement_url')
        .notEmpty().withMessage('Please provide a valid URL')
        .matches(/^https:\/\/www\.finn\.no\/job\//).withMessage('URL must start with "https://www.finn.no/job/"')
        .isURL().withMessage('Please provide a valid URL'),
    check('applicant_name')
        .isString().withMessage('Name must be a string')
        .matches(/^[a-zA-Z\s]+$/).withMessage('Name can only contain letters and spaces')
        .notEmpty().withMessage('Please provide a valid name'),
    check('applicant_email')
        .notEmpty().withMessage('Please provide a valid email address')
        .isEmail().withMessage('Please provide a valid email address'),
    check('applicant_address')
        .notEmpty().withMessage('Please provide a valid address')
        .isString().withMessage('Address must be a string')
        .matches(/^[a-zA-Z0-9\s.,-/æøåÆØÅ]+$/).withMessage('Address can only contain letters, numbers, spaces, and . , - / characters'),
    check('applicant_city')
        .isString(/^[a-zA-Z\s]+$/).withMessage('City must be a string')
        .notEmpty().withMessage('Please provide a valid city'),
    check('applicant_zip_code')
        .notEmpty().withMessage('Please provide a valid zip code')
        .isNumeric().withMessage('Zip code must be a number')
        .isLength({ min: 4, max: 4 }).withMessage('Zip code must be exactly 4 digits')

],
async (req, res) => {
     // Handle validation errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.array() });
     }
 
     try {
        // const targetURL = req.body.applicant_job_advertisement_url;
        // const jobApplicationResult = await getWebContent(targetURL);
        // const prompt = await promptGeneratorJobApplication(jobApplicationResult);
        // const coverLetter = await openAIFetchData(prompt);
        // const htmlCoverLetter = await textToHtml(coverLetter);
        // jobApplicationResult.applicant_name = req.body.applicant_name;
        // jobApplicationResult.applicant_email = req.body.applicant_email;
        // jobApplicationResult.applicant_address = req.body.applicant_address;
        // jobApplicationResult.applicant_city = req.body.applicant_city;
        // jobApplicationResult.applicant_zip_code = req.body.applicant_zip_code;
        // jobApplicationResult.applicant_cover_letter = htmlCoverLetter;

       // for testing with out API calls
        await new Promise(resolve => setTimeout(resolve, 2000));
        const jobApplicationResult = {
            applicant_address:"Siljustølvegen 100",
            applicant_city: "RÅDAL",
            applicant_cover_letter : "<p>Vedlagt søknad viser jeg interesse for stillingen som softwareutvikler (.NET/C#) ved Thales Norway AS.</p><p>Med min bakgrunn som utdannet i konsulentbasert softwareutvikling har jeg erfaring med å jobbe med .NET-baserte web-applikasjoner (back- og/eller front-end). Jeg har god kjennskap til JavaScript, HTML5, Windows Server, SQL Server, NServiceBus, test-drevet utvikling og Continuous Integration/Deployment. Jeg er også oppdatert på moderne utviklingsmetoder og rammeverk.</p><p>Min kompetanse og erfaring har gitt meg et solid fundament innen problemløsning og systemutvikling, og jeg har stor evne til å sette meg inn i komplekse problemstillinger.</p><p>Gjennom mine tidligere prosjekter har jeg fått et godt grep om hvordan man bygger robuste og skalerbare systemer for kunder og brukere. Jeg trives godt i et miljø hvor kollegaer utfordrer meg, og hvor jeg har muligheten til å påvirke nye løsninger og teknologi.</p><p>Med dette ønsker jeg å søke på stillingen som softwareutvikler (.NET/C#) ved Thales Norway AS. Jeg har følgende kvalifikasjoner som jeg mener gjør meg til en god kandidat:</p><p>• Relevant høyere utdanning</p><p>• Erfaring fra .NET-baserte web-applikasjoner</p><p>• Oppdatert kunnskap om moderne utviklingsmetoder og rammeverk</p><p>• God evne til å sette seg inn i komplekse problemstillinger</p><p>• Erfaring med å bygge robuste og skalerbare systemer</p><p>• Evne til å jobbe i et team og påvirke nye løsninger</p><p>Takk for at du vurderte min søknad. Jeg vil gjerne diskutere stillingen ytterligere, og håper du vil invitere meg på intervju.</p></div>",
            applicant_email: "matsgundersen@hotmail.com",
            applicant_name : "Mats Gundersen",
            applicant_zip_code : "5237",
            employeer_address : "Langkaia 1",
            employeer_job_description : "",
            employeer_keywords : ".Net, JavaScript, Windows Server, Continuous Integration, Systemutvikler",
            employer_job_title : "Softwareutvikler (.NET/C#)",
            employer_name : "Thales Norway AS",
            employer_zip_code:"0150 Oslo"
        }
        res.json(jobApplicationResult);
    } catch (error) {
        logger.error(`Error in /job-application-data: ${error}`);
        console.log(error);
    } 
});


router.post('/generate-export-file', [
    check('htmlData')
        .notEmpty().withMessage('HTML data is required')
        .isString().withMessage('HTML data must be a string'),
    check('type')
        .notEmpty().withMessage('Type is required')
        .isIn(['pdf', 'docx']).withMessage('Type must be either "pdf" or "docx"'), 
],
async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
   
    const { htmlData, type } = req.body;
    if (type === 'pdf') {
        try {
          // Set wkhtmltopdf options
          const options = {
            pageSize: 'A4',
            marginTop: '0.7in',
            marginRight: '1in',
            marginBottom: '0.7in',
            marginLeft: '1in',
          };
      
          // Convert the HTML content to a PDF stream
          const pdfStream = wkhtmltopdf(htmlData, options);
      
          // Set the appropriate response headers
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader('Content-Disposition', 'attachment; filename=application.pdf');
      
          // Pipe the stream to the response object
          pdfStream.pipe(res);
      
          // Handle any errors
          pdfStream.on('error', (error) => {
            logger.error(`Error in /generate-export-file (pdf): ${error}`);
          });
        } catch (error) {
          logger.error(`Error in /generate-export-file (pdf): ${error}`);
          res.status(500).send(error);
        }
      }
    if (type === 'docx') {
        try {
            const buffer = await htmlToDocx(htmlData);
            // Convert the buffer to a stream
            const stream = Readable.from(buffer);

            // Set the appropriate response headers
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
            res.setHeader('Content-Disposition', 'attachment; filename=application.docx');

            // Pipe the stream to the response object
            stream.pipe(res);
        } catch (error) {
            logger.error(`Error in /generate-export-file (docx): ${error}`);
            res.status(500).send(error);
        }
    } 
});

router.post('/subscribe-to-mailchimp', [
    check('email_address')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),
    check('status')
    .notEmpty().withMessage('Status is required')
    .isString().withMessage('Status must be a string')
],
async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({statusCode: 422, errors: errors.array() });
    }

    mailchimp.post('/lists/2127c259b3/members', {
        email_address : req.body.email_address,
        status : req.body.status
      })
      .then(function(results) {
        res.json(results);
      })
      .catch(function (err) {
        logger.error(`Error in /subscribe-to-mailchimp: ${err}`);
        res.json(err);
      });
});


module.exports = router;