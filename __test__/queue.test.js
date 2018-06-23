'use strict';

let Queue = require('../lib/queue.js');

describe('Queue', () => {

  it('implements first in first out (FIFO) functionality', () => {

    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);

    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(4);

  });

  it('testing that an error is thrown if enqueue method doesnt have an argument', () => {

    let testQueue = new Queue();

    expect(() => {
      testQueue.enqueue();
    }).toThrow('Waiting for the delivery boy');
  });

  it('testing that an error is thrown if the dequeue method is run and the queue is empty', () => {

    let testQueue = new Queue();

    expect(() => {
      testQueue.dequeue();
    }).toThrow('Queue is empty');
  });  

  it('testing that serialize method returns serialized queue data', () => {
    let testQueue = new Queue();

    testQueue.enqueue('NYT');
    testQueue.enqueue('WP');
    testQueue.enqueue('NE');
  
    let data = testQueue.serialize();

    expect(data).toBe('["NYT","WP","NE"]');
  });

  it('testing that deserialize method returns a parsed json array', () => {
    let testQueue = new Queue();
    let data = '["NYT","WP","NE"]';

    testQueue.deserialize(data);

    expect(testQueue.queue).toEqual(['NYT', 'WP', 'NE']);
  });
});