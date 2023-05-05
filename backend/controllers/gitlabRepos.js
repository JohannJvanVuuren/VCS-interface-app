/* Requiring environmental variables through dotenv package */
require('dotenv').config({path: '../.env'});

/* Import of the axios client used for making the GitHub API calls */
const axios = require('axios');

/* The controller for the GitLab repos post route. Calls are made to this route from the frontend with the
* username encoded into the body of the request. */
const getGitLabRepos = (req, res) => {

    /* Extraction of the user id from the body of the request */
    const id = req.body.id;

    /* The configuration object for the axios request. It contains the GitLab token in the header. This
    * key is required for some API functionalities */
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GITLAB_API_KEY}`
        }
    }

    /* The API endpoint for information on repos of a specific user with the user id  variable interpolated */
    const URL = `https://gitlab.com/api/v4/users/${id}/projects`;

    /* The axios get request to the endpoint and then sending the information received back to the frontend */
    axios.get(URL, config)
        .then((response) => {
            const repoList = response.data;
            console.log(repoList);
            res.send(repoList)
        })
        .catch((error) => {
            console.log(error);
        })


}

/* Export of the controller to be used in its respective route */
module.exports.getGitLabRepos = getGitLabRepos;