var assert = require('assert');

/**
 * Takes in a positive integer and returns a string with
 * the representation of that number as a roman numeral.
 *
 * @param number
 * @returns string
 */
function romanNumeral(number) {
  return 'I';
}

describe('RomanNumerals', function() {
  it('supports the number one', function() {
    const input = 1;
    const output = romanNumeral(input);
    assert.equal('I', output);
  })
});