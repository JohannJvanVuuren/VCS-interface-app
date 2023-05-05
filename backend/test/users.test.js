/*
* This test is to evaluate the general functioning of the backend. It evaluates the dummy 'users' route.
*/

const expect = require('chai').expect;

const assert = require('node:assert')
const request = require('request');

describe('Users page status and content', function() {
    describe ('users route', function() {
        /* This function tests whether a status of 200 is received back */
        it('status', function(done){
            request('http://localhost:8000/users',
                function(error, response) {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
        });
        /* This function tests if the content received back is correct */
        it('content', function(done) {
            request('http://localhost:8000/users',
                function(error, response, body) {
                    expect(body).should.be.a('object');
                    done();
                });
        });
    });
});

assert(5 < 7);