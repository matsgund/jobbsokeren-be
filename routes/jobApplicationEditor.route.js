const express = require('express');
const router = express.Router();
const { valdidateEditorUserInput, validateEditorDocument } = require('../middlewares/validation/jobApplicationEditor.validation');
const programmingLanguagesController = require('../controllers/programmingLanguages.controller');


// POST /api/job-application-editor/job-application-data
router.post('/job-application-data',valdidateEditorUserInput, programmingLanguagesController.create);
  
// POST /api/job-application-editor/generate-export-file
router.post('/generate-export-file',validateEditorDocument, programmingLanguagesController.create);


module.exports = router;