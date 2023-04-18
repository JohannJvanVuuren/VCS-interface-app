const axios = require('axios').default;
const frontendInfo = require('../controllers/frontendInfo');
const express = require('express');
const app = express();

const URL = `https://api.github.com/search/users?q=${frontendInfo.searchTerm}+repos:%3E1+followers:%3E1`;

require('dotenv').config();

const config = {
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_KEY}`
    }
}

axios.get(URL, config)
.then(response => console.log(response.data))
.catch(err => console.log(err))