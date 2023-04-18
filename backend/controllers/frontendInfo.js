const express = require('express');
const app = express();

const processFrontendRequest = (req, res) => {
    const searchTerm = req.query.searchTerm;
    res.send(searchTerm);

    module.exports = { searchTerm };
}

module.exports.processFrontendRequest = processFrontendRequest;
