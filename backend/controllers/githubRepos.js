/* Requiring environmental variables through dotenv package */
require('dotenv').config({path: '../.env'});

/* Import of the axios client used for making the GitHub API calls */
const axios = require('axios');

/* The controller for the GitHub repos post route. Calls are made to this route from the frontend with the
* username encoded into the body of the request. */
const getGitHubRepos = (req, res) => {

    /* Extracting the username from the body of the request. */
    const user = req.body.user;

    /* The configuration object for the axios request. It contains the GitHub token in the header. This
    * key is required for some API functionalities */
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_API_KEY}`
        }
    }

    /* The API endpoint for information on repos of a specific user with the user variable interpolated */
    const URL = `https://api.github.com/users/${user}/repos`

    /* The axios get request to the endpoint and then sending the information received back to the frontend */
    axios.get(URL, config)
        .then((response) => {
            const repoList = response.data;
            res.send(repoList)
        })
        .catch((error) => {
            console.log(error);
        })

}

/* Export of the controller to be used in its respective route */
module.exports.getGitHubRepos = getGitHubRepos;