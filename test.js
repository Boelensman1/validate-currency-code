'use strict';

const validateCurrencyCode = require('./index.js');
const chai = require('chai');
const expect = chai.expect;
chai.config.includeStack = true;

describe('Test validate-currency-code', function() {
  it('Should validate the correct codes', function() {
    expect(validateCurrencyCode('EUR')).to.be.true;
    expect(validateCurrencyCode('JPY')).to.be.true;
  });
  it('Should invalidate the incorrect codes', function() {
    expect(validateCurrencyCode('AAA')).to.be.false;
    expect(validateCurrencyCode(1)).to.be.false;
  });
});
