const getPaymentTokenFromAPI = require('./6-payment_token.js');
const chai = require('chai');
const expect = chai.expect;
describe('getPaymentTokenFromAPI', function () {
    it('check return of true', function(done) {
      getPaymentTokenFromAPI(true).then(data => {
        expect(data).to.deep.equal({data: 'Successful response from the API' });
        done();
      }).catch(err => {
        done(err);
      });
    });
});