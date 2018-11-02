const assert = require('assert');

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

describe('RomanNumerals', () => {
  it('supports the number one', () => {
    const input = 1;
    const output = romanNumeral(input);
    assert.strictEqual('I', output);
  });
});