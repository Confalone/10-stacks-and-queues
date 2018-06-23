'use strict';

class Stack {
  constructor() {
    this.stack = new Array();
  }
  push(papers) {
    if (!papers) throw 'Waiting for the delivery boy';
    this.stack.push(papers);
  }
  pop() {
    if (this.stack.length === 0) throw 'Stack is empty';
    return this.stack.pop();
  }
  serialize() {
    return JSON.stringify(this.stack);
  }
  deserialize(value) {
    let stack = JSON.parse(value).reverse();
    stack.forEach(element => {
      this.push(element);
    });
    return this;
  }
}

module.exports = Stack;