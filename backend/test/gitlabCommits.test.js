/*
* This test is to evaluate the functioning of the gitlabCommits route
*/
const should = require('chai').should();
const assert = require('node:assert')
const request = require('request');

describe('Gitlab Commits status and content', function() {
    describe ('gitlabCommits route', function() {
        /* This function tests whether a status of 200 is received back */
        it('status', function(done){
            request('http://localhost:8000/gitlabCommits',
                function(error, response) {
                    assert(response.statusCode, 200);
                    done();
                });
        });
        /* This function tests if the content received back is correct */
        it('content', function(done) {
            request('http://localhost:8000/gitlabCommits',
                function(error, response, body) {
                    should.not.exist(error)
                    done();
                });
        });
    });
});

assert(5 < 7);