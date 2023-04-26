/* Require statement to import Express */
const express = require('express');

/* Creating an instance of Router */
const router = express.Router();

/* Import of the gitlabInterface controller */
const gitlabInterface = require('../controllers/gitlabInterface')

/* Setting up the route for incoming post requests with the search term information needed for the external APIs */
router.post('/', gitlabInterface.processFrontendRequestGitLab);

/* Export of the router instance */
module.exports = router;
