/*
* This test is to evaluate the general functioning of the backend
*/
const should = require('chai').should();
const assert = require('node:assert')
const request = require('request');

describe('Gitlab Interface status and content', function() {
    describe ('gitlabInterface route', function() {
        /* This function tests whether a status of 200 is received back */
        it('status', function(done){
            request('http://localhost:8000/gitlabInterface',
                function(error, response) {
                    assert(response.statusCode, 200);
                    done();
                });
        });
        /* This function tests if the content received back is correct */
        it('content', function(done) {
            request('http://localhost:8000/gitlabInterface',
                function(error, response, body) {
                    should.not.exist(error)
                    done();
                });
        });
    });
});

assert(5 < 7);