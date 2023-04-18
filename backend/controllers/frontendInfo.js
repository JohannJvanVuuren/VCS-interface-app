
const processFrontendRequest = (req, res) => {
    const searchTerm = req.query.searchTerm;
    res.send(searchTerm);

    module.exports = { searchTerm };
}

module.exports.processFrontendRequest = processFrontendRequest;
