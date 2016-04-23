'use strict';

module.exports = {
  'rules': {
    'comma-dangle': [
      2,
      'always-multiline',
    ],
    'space-before-function-paren': [
      2,
      'never',
    ],
    'dot-location': [
      2,
      'property'
    ],
    'no-extra-parens': [
      2,
      'functions'
    ],
    'no-var': 2,
    'prefer-const': 2,
    'newline-after-var': 0,
  },
  'env': {
    'node': true,
    'mocha': true,
    'es6': true,
  },
  'ecmaFeatures': {
    'blockBindings': true,
    'modules': false,
    impliedStrict: false,
  },
  'extends': 'defaults/configurations/google',
};
