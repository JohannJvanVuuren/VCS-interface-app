/* Requiring environmental variables through dotenv package */
require('dotenv').config({path: '../.env'});
/* Importing the axios client */
const axios = require('axios').default;

/* This controller receives the username entered on the frontend, sets up a config object with the API key
* for axios and then sends a get request to the GitHub API to obtain the users matching the criteria
* entered on the frontend. The endpoint is set to return any user matching part of the name entered by
* the user on the frontend as long as 1 repo and 1 follower.  */
const processFrontendRequestGitLab = (req, res) => {

    /* Obtaining the search term from the frontend axios post request sent to route "/githubInterface" */
    const searchTerm = req.body.searchQuery;


    /* Setting up the config object with the method type and the API key for the axios get request to GitHub API */
    const config = {
        params: {
            search: `${searchTerm}`,
            per_page: 100
        },
        headers: {
            Authorization: `Bearer ${process.env.GITLAB_API_KEY}`
        }
    }

    /* The endpoint of the GitHub API search */
    const URL = `https://gitlab.com/api/v4/users`;
    axios.get(URL, config)
        .then((response) => {
            const users = response.data;
            res.send(users);

        })
        .catch((error) => {
            console.log(error.message);
        })

    console.log(searchTerm);
}

module.exports.processFrontendRequestGitLab = processFrontendRequestGitLab;