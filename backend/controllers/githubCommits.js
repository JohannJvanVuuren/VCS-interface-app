/* Requiring environmental variables through dotenv package */
require('dotenv').config({path: '../.env'});

const axios = require('axios');

const fetchGithubCommits = (req, res) => {
    const user = req.body.user;
    const repoName = req.body.repoName;



    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_API_KEY}`
        }
    }

    const URL = `https://api.github.com/repos/${user}/${repoName}/commits`

    axios.get(URL, config)
        .then(response => {
            res.send(response.data)

        })
        .catch(err => {
            console.log(err);
        })
}

module.exports.fetchGitHubCommits = fetchGithubCommits;