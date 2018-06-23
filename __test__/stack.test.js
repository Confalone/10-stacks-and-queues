'use strict';

let Stack = require('../lib/stack.js');

describe('stack', () => {
  it('using LIFO functionality', () => {

    let testStack = new Stack();

    testStack.push(1);
    testStack.push(2);
    testStack.push(3);

    expect(testStack.pop()).toEqual(3);
    expect(testStack.pop()).toEqual(2);
    expect(testStack.pop()).toEqual(1);

  });
  it('testing that an error is thrown if push method doesnt have an argument', () => {

    let testStack = new Stack();

    expect(() => {
      testStack.push();
    }).toThrow('Waiting for the delivery boy');
  });
});