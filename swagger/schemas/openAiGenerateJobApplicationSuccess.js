module.exports = {
    type: 'object',
    properties: {
        code: {
            type: 'integer',
            format: 'int32',
            description: 'The status code of the response',
        },
        message: {
            type: 'string',
            description: 'Description of the response',
        },
        data: {
            type: 'object',
            description: 'The content of the response (optional)',
            properties: {
                applicant_address: { type: 'string' },
                applicant_city: { type: 'string' },
                applicant_cover_letter: { type: 'string' },
                applicant_email: { type: 'string' },
                applicant_name: { type: 'string' },
                applicant_zip_code: { type: 'string' },
                employeer_address: { type: 'string' },
                employeer_job_description: { type: 'string' },
                employeer_keywords: { type: 'string' },
                employer_job_title: { type: 'string' },
                employer_name: { type: 'string' },
                employer_zip_code: { type: 'string' },
            },
        },
    },
    required: ['code', 'message'],
    example: {
        code: 200,
        message: 'Ok - the request was successful',
        data: {
            applicant_address: "Siljustølvegen 100",
            applicant_city: "RÅDAL",
            applicant_cover_letter: "<p>Viser til utlyst stilling...</p>",
            applicant_email: "matsgundersen@hotmail.com",
            applicant_name: "Mats Gundersen",
            applicant_zip_code: "5237",
            employeer_address: "Langkaia 1",
            employeer_job_description: "\n Thales Norway leverer produkter...",
            employeer_keywords: "\n .Net, JavaScript, Windows Server...",
            employer_job_title: "Softwareutvikler (.NET/C#)",
            employer_name: "Thales Norway AS",
            employer_zip_code: "0150 Oslo",
        },
    },
};