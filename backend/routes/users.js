/*
* This route is here to test the general functioning of the backend
*/
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, ) {
  res.send('respond with a resource');
});

module.exports = router;
