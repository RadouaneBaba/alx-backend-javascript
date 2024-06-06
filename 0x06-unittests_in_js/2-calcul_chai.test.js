const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('Number Calculate', function () {
  it('sum test', function () {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.equal(6);
  });
  it('subtract test', function () {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.equal(-4);
  });
  it('divide test normal case', function () {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.equal(0.2);
  });
  it('divide test error case', function () {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });
  it('test not right argument', function () {
    const result = calculateNumber('MULTIPLY', 1.4, 4.5);
    expect(result).to.equal(undefined);
  });
});