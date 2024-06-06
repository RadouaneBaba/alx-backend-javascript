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
  it('negative cart', function () {
    request('http://localhost:7865/cart/-5', function (err, resp, body) {
      expect(resp.statusCode).to.equal(404);
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
  it('wrong cart path', function () {
    request('http://localhost:7865/cart/hello', function (err, resp, body) {
      expect(resp.statusCode).to.equal(404);
    });
  });
});

describe('login and payments', function () {
  it('correct status', function () {
    request('http://localhost:7865/available_payments', function (err, resp, body) {
      expect(resp.statusCode).to.equal(200);
    });
  });
  it('correct body', function () {
    request('http://localhost:7865/available_payments', function (err, resp, body) {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
    });
  });
  it('invalid route 2', function () {
    request('http://localhost:7865/available_payments/test', function (err, resp, body) {
      expect(resp.statusCode).to.equal(404);
    });
  });

  it('valid login', function (done) {
    request.post({
      url: 'http://localhost:7865/login',
      form: {
        userName: 'Radouane'
      }
    }, function (err, resp, body) {
      expect(body).to.equal('Welcome Radouane');
      done();
    });
  });
  it('valid login status', function (done) {
    request.post({
      url: 'http://localhost:7865/login',
      form: {
        userName: 'Radouane'
      }
    }, function (err, resp, body) {
      expect(resp.statusCode).to.equal(200);
      done();
    });
  });
});