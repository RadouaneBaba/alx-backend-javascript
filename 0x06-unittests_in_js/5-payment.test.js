const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');


describe('sendPaymentRequestToApi', function() {
  let spy;
  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  it('test send payment 100 20', function() {
    sendPaymentRequestToApi(100, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is 120'));
  });

  it('test send payment 2', function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is 20'));
  });

  afterEach(function() {
    spy.restore();
  });
});