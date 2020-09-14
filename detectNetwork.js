// pommander installed
/* eslint-disable comma-dangle */
/* eslint-disable no-var */
// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var data = {
    'American Express': {
      prefixes: [34, 37], lengths: [15]
    },
    'Diner\'s Club': {
      prefixes: [38, 39], lengths: [14]
    }
  }

  var twoDigitPrefix = Number(cardNumber.toString().slice(0, 2));
  var length = cardNumber.toString().length;

  for (var network in data) {
    if (data[network].prefixes.includes(twoDigitPrefix) && data[network].lengths.includes(length)) {
      return network;
    }
  }

  return undefined;
};