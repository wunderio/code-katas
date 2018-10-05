<?php

use \Codeception\Test\Unit;

/**
 * Takes in a string and adds new lines as needed
 * to wrap the text so that a single line never
 * exceeds $length.
 *
 * @param string $string
 * @param int $length
 *
 * @return string
 */
function wrapStrings(string $string, int $length) {
  return $string;
}


class StringWrapperCestTest extends Unit {

  /**
   * @var UnitTester
   */
  protected $tester;

  public function testShortString() {
    $input = 'a';
    $output = wrapStrings($input, 3);
    $this->tester->assertEquals('a', $output);
  }
}