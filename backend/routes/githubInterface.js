/* Require statement to import Express */
const express = require('express');

/* Creating an instance of Router */
const router = express.Router();

/* Import of the githubInterface controller file */
const githubInterface = require('../controllers/githubInterface')

/* Setting up a route for the incoming search term information from the frontend */
router.post('/', githubInterface.processFrontendRequestGitHub);

/* Export of the router instance */
module.exports = router;
