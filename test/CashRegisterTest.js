const assert = require('assert');

/**
 * This object represents a cash register.
 *
 * For all cash parameters, we use an object where the key is the denomination
 * and the value is the number of coins/bills of that denomination. For example,
 * three one-euro coins and one five-euro bill would be represented like this:
 *
 * {
 *   1: 3,
 *   5: 1,
 * }
 */
class CashRegister {
  /**
   * Initialize a cash register
   * @param initialCash
   */
  constructor(initialCash) {
    this.cash = initialCash;
  }

  getCurrentChange() {
    return this.cash;
  }

  /**
   * Pay for a given price providing a certain amount of cash.
   * The cash of the register is updated and any excess change is returned.
   *
   * @param price
   * @param cash
   *
   * @returns change
   */
  pay(price, cash) {

    // Return the change
    return {};
  }
}

describe('Cash register', () => {

  it('can read the initial cash', () => {
    // Initialize a cash register with ten 1-euro coins.
    const cashRegister = new CashRegister({
      1: 10
    });
    assert.strictEqual(10, cashRegister.getCurrentChange()[1]);
  });
});