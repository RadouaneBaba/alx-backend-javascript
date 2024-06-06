const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('index page', function () {
  it('correct status', function () {
    request('http://localhost:7865', function (err, resp, body) {
      expect(resp.statusCode).to.equal(200);
    });
  });
  it('correct body', function () {
    request('http://localhost:7865', function (err, resp, body) {
      expect(body).to.equal('Welcome to the payment system');
    });
  });
  it('invalid route', function () {
    request('http://localhost:7865/test', function (err, resp, body) {
      expect(resp.statusCode).to.equal(404);
    });
  });
});