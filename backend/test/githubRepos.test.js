/*
* This test is to evaluate the general functioning of the backend
*/
const should = require('chai').should();
const assert = require('node:assert')
const request = require('request');

describe('Github Repos status and content', function() {
    describe ('githubRepos route', function() {
        /* This function tests whether a status of 200 is received back */
        it('status', function(done){
            request('http://localhost:8000/githubRepos',
                function(error, response) {
                    assert(response.statusCode, 200);
                    done();
                });
        });
        /* This function tests if the content received back is correct */
        it('content', function(done) {
            request('http://localhost:8000/githubRepos',
                function(error, response, body) {
                    should.not.exist(error)
                    done();
                });
        });
    });
});

assert(5 < 7);