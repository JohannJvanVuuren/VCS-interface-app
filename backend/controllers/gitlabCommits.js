/* Requiring environmental variables through dotenv package */
require('dotenv').config({path: '../.env'});

const axios = require('axios');

const getGitLabCommits = (req, res) => {
    const user = req.body.user;
    const repoName = req.body.repoName;

    const repoId = req.body.repoId;

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_API_KEY}`
        }
    }

    const URL = `https://gitlab.com/api/v4/${repoId}/repository/commits`;

    axios.get(URL, config)
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports.getGitLabCommits = getGitLabCommits;