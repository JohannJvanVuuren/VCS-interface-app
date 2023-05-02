/* Require statement to import Express */
const express = require('express')

/* Creating an instance of Router */
const router = express.Router();

const gitlabCommits = require('../controllers/gitlabCommits');

/* Setting up a route for the incoming search term information from the frontend */
router.post('/', gitlabCommits.getGitLabCommits);

/* Export of the router instance */
module.exports = router;