'use strict';

const codes = require('./codes.js');

function isCountryCode(name) {
  return (codes.indexOf(name) > 0);
}

module.exports = isCountryCode;
