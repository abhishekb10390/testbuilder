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
  var forChinaU = [];
  for (var s = 622126; s < 622926; s++) {
    forChinaU.push(`${s}`);
  }

  function stringCheck(string) {
    if(typeof(string) === 'string') {
      return true;
    }
    return;
  }

  function numCheck(string) {
    var numbers = '1234567890'.split('');
    for ( var i = 0; i < string.length; i++) {
      if (numbers.includes(string[i]) === false) {
        return;
      }
    }
    return true;
  }
   if (stringCheck(cardNumber)) {
     if (numCheck(cardNumber)) {
      if (cardNumber.slice(0,2) === '38' || cardNumber.slice(0,2) === '39') {
        if (cardNumber.length === 14) {
          return "Diner's Club";
        }
      } else if (cardNumber.slice(0,2) === '34' || cardNumber.slice(0,2) === '37') {
          if (cardNumber.length === 15) {
            return 'American Express';
        }
      } else if (forChinaU.includes(cardNumber.slice(0,6)) || ['624', '625', '626'].includes(cardNumber.slice(0,3)) ||
        ['6282', '6283', '6284', '6285', '6286', '6287', '6288'].includes(cardNumber.slice(0,4))) {
          if ([16, 17, 18, 19].includes(cardNumber.length)) {
            return "China UnionPay";
          }
      } else if (['4903', '4905', '4911', '4936', '6333', '6759'].includes(cardNumber.slice(0,4)) || 
        ['564182', '633110'].includes(cardNumber.slice(0,6))) {
          if ([16, 18, 19].includes(cardNumber.length)) {
            return 'Switch';
        }
      } else if (cardNumber[0] === '4') {
          if (cardNumber.length === 13 || cardNumber.length ===16 || cardNumber.length === 19) {
            return 'Visa';
        }
      } else if (cardNumber.slice(0,2) === '51' || cardNumber.slice(0,2) === '52'|| cardNumber.slice(0,2) === '53' || 
        cardNumber.slice(0,2) === '54' || cardNumber.slice(0,2) === '55') {
          if (cardNumber.length === 16) {
            return 'MasterCard';
        }
      } else if (['644', '645', '646', '647', '648', '649'].includes(cardNumber.slice(0,3)) || cardNumber.slice(0,4)=== '6011' ||
         cardNumber.slice(0,2) === '65') {
           if (cardNumber.length === 16 || cardNumber.length === 19) {
            return 'Discover';
           }
      } else if (['5018', '5020', '5038', '6304'].includes(cardNumber.slice(0,4))) {
          if ([12,13,14,15,16,17,18,19].includes(cardNumber.length)) {
            return 'Maestro';
          }
      }
     }
   } 
};




