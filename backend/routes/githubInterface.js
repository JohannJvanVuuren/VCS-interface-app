/* Require statement to import Express */
const express = require('express');

/* Creating an instance of Router */
const router = express.Router();

const githubInterface = require('../controllers/githubInterface')

router.post('/', githubInterface.processFrontendRequestGitHub);


module.exports = router;
