module.exports = {
    type: 'object',
    required: ['applicant_job_advertisement_url', 'applicant_name', 'applicant_email', 'applicant_address', 'applicant_city', 'applicant_zip_code'],
    properties: {
        applicant_job_advertisement_url: {
            type: 'string',
            description: 'The url of the job advertisement'
        },
        applicant_name: {
            type: 'string',
            description: 'The name of the applicant'
        },
        applicant_email: {
            type: 'string',
            description: 'The email of the applicant'
        },
        applicant_address: {
            type: 'string',
            description: 'The address of the applicant'
        },
        applicant_city: {
            type: 'string',
            description: 'The city of the applicant'
        },
        applicant_zip_code: {
            type: 'string',
            description: 'The zip code of the applicant'
        },
        applicant_cv_summary: {
            type: 'string',
            description: 'The summary of the CV'
        },    
    },
    example: {
        applicant_job_advertisement_url: 'https://www.finn.no/job/fulltime/ad.html?finnkode=262151707',
        applicant_name: 'John Doe',
        applicant_email: 'exampl@hotmial.com',
        applicant_address: 'Example Street 123',
        applicant_city: 'Example City',
        applicant_zip_code: '1234',
        applicant_cv_summary: 'This is a summary of the CV'
    }
};
