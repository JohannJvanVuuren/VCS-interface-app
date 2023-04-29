/* Requiring environmental variables through dotenv package */
require('dotenv').config({path: '../.env'});
/* Importing the axios client */
const axios = require('axios').default;

/* This controller receives the username entered on the frontend, sets up a config object with the API key
* for axios and then sends a get request to the GitHub API to obtain the users matching the criteria
* entered on the frontend. The endpoint is set to return any user matching part of the name entered by
* the user on the frontend as long as 1 repo and 1 follower.  */
const processFrontendRequestGitHub = (req, res) => {

    /* Obtaining the search term from the frontend axios post request sent to route "/githubInterface" */
    const searchTerm = req.body.searchQuery;
    const pageNumber = req.body.pageNumber;

    console.log(pageNumber);

    /* Setting up the config object with the method type and the API key for the axios get request to GitHub API */
    const config = {
        params: {
            per_page: 12,
            page: pageNumber
        },
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
        }
    }

    /* The endpoint of the GitHub API search */
    const URL = `https://api.github.com/search/users?q=${searchTerm}+repos:%3E1+followers:%3E1`;

    /* The axios API call using the above settings */
    axios.get(URL, config)
        .then((response) => {
            const users = response.data.items;
            res.send(users);
        })
        .catch((error) => {
            console.log(error.message);
        })
}

/* Export of the controller for use in the respective route file */
module.exports.processFrontendRequestGitHub = processFrontendRequestGitHub;
