/* Require statement to import Express */
const express = require('express');

/* Creating an instance of Router */
const router = express.Router();

/* Import of the file that contains the controller for this route */
const gitlabRepos = require('../controllers/gitlabRepos');

/* Setting up a route for the incoming search term information from the frontend */
router.post('/', gitlabRepos.getGitLabRepos);

/* Export of the router instance */
module.exports = router;