const express = require('express');
const router = express.Router();
const { valdidateEditorUserInput, validateEditorDocument } = require('../middlewares/validation/jobApplicationEditor.validation');
const jobApplicationEditor = require('../controllers/jobApplicationEditor.controller');

// @desc Returns the job application data generated by the AI
// @route POST /api/job-application-editor/job-application-data
// @access Public
router.post('/job-application-data',valdidateEditorUserInput, jobApplicationEditor.generateJobApplication);

// @desc Download of the generated file
// @route POST /api/job-application-editor/generate-export-file
// @access Public
router.post('/generate-export-file',validateEditorDocument, jobApplicationEditor.exportJobApplication);


module.exports = router;