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

  it('testing that an error is thrown if the pop method is run and the stack is empty', () => {

    let testStack = new Stack();

    expect(() => {
      testStack.pop();
    }).toThrow('Stack is empty');
  });  

  it('testing that serialize method returns serialized stack data', () => {
    let testStack = new Stack();

    testStack.push('NYT');
    testStack.push('WP');
    testStack.push('NE');
  
    let data = testStack.serialize();

    expect(data).toBe('["NYT","WP","NE"]');
  });

  it('testing that deserialize method returns a parsed json array', () => {
    let testStack = new Stack();
    let data = '["NYT","WP","NE"]';

    testStack.deserialize(data);

    expect(testStack.stack).toEqual(['NE', 'WP', 'NYT']);
  });
});