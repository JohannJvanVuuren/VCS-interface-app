/* Requiring environmental variables through dotenv package */
require('dotenv').config({path: '../.env'});

/* Importing the axios client for the GitHub API call */
const axios = require('axios');

/* The controller for the GitLab commits post route. Calls are made to this route from the frontend with the
* repo ID encoded into the body of the request. */
const getGitLabCommits = (req, res) => {

    /* Extracting the repo ID from the body of the request */
    const repoId = req.body.repoId;

    /* Setting up the configuration object for the axios request. It contains the GitLab token in the header
     *to authorise requests */
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GITLAB_API_KEY}`
        }
    }

    /* The API endpoint for commits for a specific repo. The variable 'repoId is interpolated */
    const URL = `https://gitlab.com/api/v4/${repoId}/repository/commits`;

    /* The axios get request to the endpoint and then sending the information received back to the frontend */
    axios.get(URL, config)
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            console.log(err);
        })
}

/* Export of the controller to be used in its respective route */
module.exports.getGitLabCommits = getGitLabCommits;