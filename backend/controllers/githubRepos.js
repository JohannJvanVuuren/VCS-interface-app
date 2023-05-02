/* Requiring environmental variables through dotenv package */
require('dotenv').config({path: '../.env'});

const axios = require('axios');

const getGitHubRepos = (req, res) => {

    const user = req.body.user;

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_API_KEY}`
        }
    }

    const URL = `https://api.github.com/users/${user}/repos`

    axios.get(URL, config)
        .then((response) => {
            const repoList = response.data;
            res.send(repoList)
        })
        .catch((error) => {
            console.log(error);
        })

}

module.exports.getGitHubRepos = getGitHubRepos;