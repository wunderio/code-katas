const assert = require('assert');

/**
 * This object represents the logic control for an elevator.
 *
 * The input to the elevator come by calling the methods pressButtonOutside()
 * and pressButtonInside(). We assume that the control of motors, doors
 * and other mechanical components are taken care of, we only need to
 * determine where the elevator should go next when the method getNextFloor()
 * is called.
 */
class Elevator {
  /**
   * Initialize a new elevator object with an initial position.
   * @param initialFloor
   */
  constructor(initialFloor) {
    this.currentFloor = initialFloor;
  }

  /**
   * Press the button outside of the elevator on the given floor.
   *
   * @param floor
   */
  pressButtonOutside(floor) {

  }

  /**
   * Press the button inside of the elevator for the given floor.
   *
   * @param floor
   */
  pressButtonInside(floor) {

  }

  /**
   * Get the next destination floor.
   * @returns floor
   */
  getNextFloor() {
    return 0;
  }
}

describe('Elevator', function() {
  it('stays at the initial floor without input', function() {
    const elevator = new Elevator(0);
    assert.strictEqual(0, elevator.getNextFloor());
  });
});