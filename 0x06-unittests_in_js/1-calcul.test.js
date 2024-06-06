const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('Number Calculate', function () {
  it('sum test', function () {
    const result = calculateNumber('SUM', 1.4, 4.5);
    assert.equal(result, 6);
  });
  it('subtract test', function () {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.equal(result, -4);
  });
  it('divide test normal case', function () {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.equal(result, 0.2);
  });
  it('divide test error case', function () {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    assert.equal(result, 'Error');
  });
  it('test not right argument', function () {
    const result = calculateNumber('MULTIPLY', 1.4, 4.5);
    assert.equal(result, null);
  });
});