/* Requiring environmental variables through dotenv package */
require('dotenv').config({path: '../.env'});

const axios = require('axios');

const getGitLabRepos = (req, res) => {

    const id = req.body.id;

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GITLAB_API_KEY}`
        }
    }

    const URL = `https://gitlab.com/api/v4/users/${id}/projects`;

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

module.exports.getGitLabRepos = getGitLabRepos;