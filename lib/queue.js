'use strict';

class Queue {

  constructor() {
    this.queue = new Array();
  }

  enqueue(papers) {    // 0(1)
    if (!papers) throw 'Waiting for the delivery boy';
    this.queue.push(papers);
  }

  dequeue() {   // 0(1)
    if (this.queue.length === 0) throw 'Queue is empty';
    return this.queue.shift();
  }
  serialize() {   // 0(n)
    return JSON.stringify(this.queue);
  }
  deserialize(value) {     // 0(n)
    let queue = JSON.parse(value);
    queue.forEach(element => {
      this.enqueue(element);
    });
    return this;
  }
}

module.exports = Queue;