
const jobApplicationService = require('../services/jobApplicationEditor.service');
const logger = require('../utils/logger');

// POST /api/jobApplicationEditor/job-application-editor
generateJobApplication = async (req, res, next) => {
    try {
        res.json(await jobApplicationService.generate(req.body));
    } catch (err) {
        logger.error(`Error in /job-application-editor: ${err}`);
        next(err);
    }
};

// POST /api/jobApplicationEditor/generate-export-file
exportJobApplication = async (req, res, next) => {
    try {
        const result = await jobApplicationService.exportFile(req.body);
        if (result.type === 'pdf') {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=application.pdf');
        } else if (result.type === 'docx') {
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
            res.setHeader('Content-Disposition', 'attachment; filename=application.docx');
        }
        result.stream.pipe(res);
    } catch (err) {
        logger.error(`Error in /job-application-editor: ${err}`);
        next(err);
    }
};


module.exports = {
    generateJobApplication,
    exportJobApplication
};
