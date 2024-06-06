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

describe('cart page', function () {
  it('correct status cart', function () {
    request('http://localhost:7865/cart/5', function (err, resp, body) {
      expect(resp.statusCode).to.equal(200);
    });
  });
  it('correct body cart', function () {
    request('http://localhost:7865/cart/5', function (err, resp, body) {
      expect(body).to.equal('Payment methods for cart 5');
    });
  });
  it('invalid type', function () {
    request('http://localhost:7865/cart/test', function (err, resp, body) {
      expect(resp.statusCode).to.equal(404);
    });
  });
  it('cart route', function () {
    request('http://localhost:7865/cart', function (err, resp, body) {
      expect(resp.statusCode).to.equal(404);
    });
  });
});