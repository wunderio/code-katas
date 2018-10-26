const assert = require('assert');

/**
 * Takes in a string and adds new lines as needed
 * to wrap the text so that a single line never
 * exceeds $length.
 *
 * @param string
 * @param length
 * @returns string
 */
function wrapStrings(string, length) {
  return string;
}

describe('StringWrapper', function() {
  it('should wrap short strings', function() {
    const input = 'a';
    const output = wrapStrings(input, 3);
    assert.strictEqual('a', output);
  });

});