/* Require statement to import Express */
const express = require('express');

/* Creating an instance of Router */
const router = express.Router();

/* Import of the file that contains the controller for this route */
const githubRepos = require('../controllers/githubRepos');

/* Setting up a route for the incoming search term information from the frontend */
router.post('/', githubRepos.getGitHubRepos);

/* Export of the router instance */
module.exports = router;