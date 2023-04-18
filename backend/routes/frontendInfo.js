/* Require statement to import Express */
const express = require('express');

/* Creating an instance of Router */
const router = express.Router();

const frontendInfo = require('../controllers/frontendInfo')

router.post('/search-term', frontendInfo.processFrontendRequest);


module.exports = router;
