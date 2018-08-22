// process.env.NODE_ENV = 'test';

var request = require("request"),
    assert = require('chai').assert,
    chai = require('chai'),
    server = require('../index'),
    should = chai.should(),
    // helloWorld = require("../index.js"),
    base_url = "http://localhost:3000/";

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, res, body) {
        assert.equal(200, res.statusCode);
        done();
      });
    });

    it("adds a single query on POST", function(done) {
      // chai.request(server)
      request.get(server)
      .post('/post')
      .send({full_name: 'JadeAlvares', 'email': 'jadealvares@hotmail.co.uk', 'query': 'hello'})
      .end(function(err, res){
        console.log(res.body);
      res.should.have.status(200);
      res.body.should.have.property('full_name');
      res.body.should.have.property('email');
      res.body.should.have.property('query');
      // res.body.fullName.should.equal('JadeAlvares');
      done();
      });
    });

  });
});

//https://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#test---get-all



      // it('should list ALL blobs on /blobs GET', function(done) {
      //   chai.request(server)
      //     .get('/blobs')
      //     .end(function(err, res){
      //       res.should.have.status(200);
      //       done();
      //     });
      //   });

  //     it("returns Hello World", function(done) {
  //     request.get(base_url, function(error, response, body) {
  //       //expect(body).toBe("Hello World");
  //       assert.equal('index.html', body);
  //       helloWorld.closeServer();
  //       done();
  //     });
  //   });


// let convert = require('..index.js');
// // Require the built in 'assertion' library
// var assert = require('assert');
//
// // Create a group of tests about Arrays
// describe('Array', function() {
//   // Within our Array group, Create a group of tests for indexOf
//   describe('#indexOf()', function() {
//     // A string explanation of what we're testing
//     it('should return -1 when the value is not present', function(){
//       // Our actual test: -1 should equal indexOf(...)
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
//
// describe('Math', function() {
//   describe('#multiply', function() {
//     it('should test what 3 times 3 is', function() {
//       assert.equal(9, [3*3]);
//     });
//     describe('#sum', function() {
//       it('should do the sum', function() {
//         assert.equal(-8, [(3-4)*8]);
//       })
//     });
//   });
// });
//
// module.exports = convert;
