'use strict';

class Stack {
  constructor() {
    this.stack = new Array();
  }
  push(papers) {   // 0(1)
    if (!papers) throw 'Waiting for the delivery boy';
    this.stack.push(papers);
  }
  pop() {    // 0(1)
    if (this.stack.length === 0) throw 'Stack is empty';
    return this.stack.pop();
  }
  serialize() {   // 0(n)
    return JSON.stringify(this.stack);
  }
  deserialize(value) {     // 0(n)
    let stack = JSON.parse(value).reverse();
    stack.forEach(element => {
      this.push(element);
    });
    return this;
  }
}

module.exports = Stack;