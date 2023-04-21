/* Require statement to import Express */
const express = require('express');

/* Creating an instance of Router */
const router = express.Router();

const gitlabInterface = require('../controllers/gitlabInterface')

router.post('/gitlabInterface', gitlabInterface.processFrontendRequestGitLab);

module.exports = router;
