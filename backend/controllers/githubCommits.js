/* Requiring environmental variables through dotenv package */
require('dotenv').config({path: '../.env'});

/* Importing the axios client for the GitHub API call */
const axios = require('axios');

/* The controller for the GitHub commits post route. Calls are made to this route from the frontend with the
* username and specific repo name encoded into the body of the request. */
const fetchGithubCommits = (req, res) => {

    /* Extraction of the username and repo name from the body of the request */
    const user = req.body.user;
    const repoName = req.body.repoName;

    /* Setting up the header for the get request to the GitHub API. The header only contains
    * the GitHub token needed to access some features of the API */
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_API_KEY}`
        }
    }

    /* The API endpoint to which requests are sent with the necessary variables interpolated */
    const URL = `https://api.github.com/repos/${user}/${repoName}/commits`

    /* The axios get request to the endpoint and then sending the information received back to the frontend */
    axios.get(URL, config)
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            console.log('Error', error.message);
        })
}

/* Export of the controller to be used in its respective route */
module.exports.fetchGitHubCommits = fetchGithubCommits;