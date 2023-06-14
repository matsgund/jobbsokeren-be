const express = require('express');
const router = express.Router();
const { valdidateEditorUserInput, validateEditorDocument } = require('../middlewares/validation/openai.validation');
const openai = require('../controllers/openai.controller');

/**
 * @swagger
 * tags:
 *   name: OpenAi
 *   description: API to manage OpenAi requests
 */

/** 
 * @swagger
 *   /api/openai/job-application-data:
 *     post:
 *       summary: Generate job application data
 *       tags: [OpenAi]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OpenAiGenerateJobApplication'
 *       responses:
 *         "200":
 *           $ref: '#/components/responses/OpenAiGenerateJobApplicationSuccess'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "404":
 *           $ref: '#/components/responses/404'
 *         "422":
 *           $ref: '#/components/responses/422'
 *         "500":
 *           $ref: '#/components/responses/500'
 */

router.post('/job-application-data',valdidateEditorUserInput, openai.generateJobApplication);

/** 
 * @swagger
 *   /api/openai/generate-export-file:
 *     post:
 *       summary: Generate export file
 *       tags: [OpenAi]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MailchimpSubscribe'
 *       responses:
 *         "200":
 *           $ref: '#/components/responses/200'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "404":
 *           $ref: '#/components/responses/404'
 *         "422":
 *           $ref: '#/components/responses/422'
 *         "500":
 *           $ref: '#/components/responses/500'
 */
router.post('/generate-export-file',validateEditorDocument, openai.exportJobApplication);


module.exports = router;