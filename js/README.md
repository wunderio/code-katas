
# Javascript Code Katas

This set of code katas are programming exercises we have covered in our weekly
code kata session at [wunder](https://wunder.io). 

## Setup

We do not use any npm packages in our katas, the only dependency we have is the
mocha framework used to run the tests. Run `yarn install` to download mocha, 
and `npx mocha` to run the tests. 

## Katas

Each kata consists of a short problem description, a minimal test and a stub
implementation. The goal is to expand the functionality, adding one small test 
case at a time, followed by the smallest possible change to make that test pass.

We do these exercises in a pair programming setup, with two people sharing one
computer. Person A adds a small test case that fails, then gives over the control to Person
B. Person B then updates the implementation with the smallest changes needed to
make the tests pass, adds another failing test case. Person B gives the control
back to Person A who is then responsible for making the tests pass and add 
another failing test. This exchange continues until the end of the session.

## Example 

Let's take the example of a sorting function. Even though we would be using a
built-in function to sort an array of numbers in a practical situation, this
type of algorithm is a great programming exercise.

Our initial tests is very minimal on purpose:

```javascript
const assert = require('assert');

describe('sorting function', () => {
  it('returns an array', () => {
    const input = [];
    const output = sort(input);
    
    assert.ok(Array.isArray(output));
  });
});
```
For the sake of simplicity we use the built-in node.js assert module, check the
[official documentation](https://nodejs.org/api/assert.html) to see all the API
options. We could also use a dedicated assertion library like
[ChaiJS](https://www.chaijs.com/).

The initial implementation is also minimal, just covering the most basic 
implementation that will make the tests pass.
```javascript
function sort(numbers) {
  return [];
}
```

We can then add one more test case. It could be tempting to jump straight into
a more advanced case like this:

```javascript
it('sorts numbers', () => {
  const input = [1, 5, 2, 7];
  const output = sort(input);

  assert.deepEqual(output, [1, 2, 5, 7]);
});
```

However, this test would require a couple minutes of coding. We want to have as
short iterations as possible, so let's instead use a much simpler test case:

```javascript
it('preserves a single number', () => {
  const input = [1];
  const output = sort(input);

  assert.deepEqual(output, [1]);
});
```

This test can then easily be solved by making a small modification to our function:

```javascript
function sort(numbers) {
  return numbers;
}
```

The next step could be to provide multiple numbers:

```javascript
it('preserves two numbers', () => {
  const input = [1, 2];
  const output = sort(input);

  assert.deepEqual(output, [1, 2]);
});
```

Given our current implementation, this test would already pass. It doesn't hurt
to keep it, but we need to add a _failing_ test before giving the control back
to our coding partner:
   
```javascript
it('sorts two numbers', () => {
  const input = [2, 1];
  const output = sort(input);

  assert.deepEqual(output, [1, 2]);
});
```

Here again it could be tempting to start implementing a full sorting algorithm,
but remember to be lazy. Let's focus on solving this specific test case, we will
have plenty of time to refactor the implementation later on:

```javascript
function sort(numbers) {
  if (numbers[0] > numbers[1]) {
    return numbers.reverse();    
  }
  else {
    return numbers;
  }
  
}
```

Most code katas don't have a fixed set of requirements. The topic gives a
general direction, but it's up to the participants to define the exact 
requirements. In our case, we could for example determine that the algorithm
should throw an error if the input array contains non-numbers, or alternatively
we could expect the function to convert strings like `"5"` into the equivalent 
number.

## Goals

The goal of these code kata is to become better programmers. 

Being a good programmer doesn't depend on a specific language or framework,
the starter code for our katas is in javascript, but the tasks could be solved
in any programming language.

A test driven approach forces us to think about requirements before jumping
into the implementation. It's surprisingly easy to write obscure code, writing
tests leads us to consider how our code is used, not only what it does.

By starting simple we are able to keep the complexity as low as possible for
the current requirements. Just like priorization is key to the success of an
agile project, a code kata gives us the opportunity to work on identifying the 
next steps that will generate value in a much smaller context. 

The test coverage then makes it possible for us to confidently address more
complex cases by refactoring our existing code. 

A good programmer is able to work in a team. When we do pair programming, we
are also practicing how we work with others. We get to learn from others, but 
we also get to practice empowering others.

## Code katas at wunder

We have a weekly code kata session taking place every Friday at 15:00 EST where
anyone is free to participate (please book your time against your continuous
learning budget). Coordination around the event takes place in the 
`#wunder-code-kata` slack channel.

Working in pairs works best when both people are in the same location, so we 
would recommend trying to find a coding partner in your office. For those who 
don't have a partner or who are working remotely, join the slack channel and 
we will match you with a remote partner, a remote session using screen and 
control sharing can work pretty well.
