const assert = require('assert');
const calculateNumber = require('./0-calcul.js')
describe('calcul', function () {
  it('normal addition test', function () {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });
  it('addition with one non rounded number', function () {
    const result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });
  it('addition with two non rounded numbers', function () {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });
  it('test .5 numbers', function () {
    const result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });
  it('test negative numbers', function () {
    const result = calculateNumber(-1.5, -3.7);
    assert.equal(result, -5);
  });
});