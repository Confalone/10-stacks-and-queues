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
    return this.stack.pop();
  }
}

module.exports = Stack;