[![Build Status](https://travis-ci.com/Confalone/10-stacks-and-queues.svg?branch=master)](https://travis-ci.com/Confalone/10-stacks-and-queues)

# STACKS AND QUEUES

## Stacks

### Methods - FIFO
#### `push(papers)` 
  * Push method accepts papers as an argument and adds it to the stack.

  ```
      let testStack = new Stack();

    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
  ```
#### `pop()`
  * Pop method does not accept any arguments and removes the last item from the stack.

  ```
      let testStack = new Stack();

    testStack.push(1);
    testStack.push(2);
    testStack.push(3);

    expect(testStack.pop()).toEqual(3);
    expect(testStack.pop()).toEqual(2);
    expect(testStack.pop()).toEqual(1);
  ```
#### `serialize()`
  * Serialize method returns a JSON object containing the stack data.

  ```
    let testStack = new Stack();

    testStack.push('NYT');
    testStack.push('WP');
    testStack.push('NE');
  
    let data = testStack.serialize();

    expect(data).toBe('["NYT","WP","NE"]');
  ```
#### `deserialize(data)`
  * Deserialize method accepts an argument of data and turns it into a valid stack.
  ```
   let testStack = new Stack();
    let data = '["NYT","WP","NE"]';

    testStack.deserialize(data);

    expect(testStack.stack).toEqual(['NE', 'WP', 'NYT']);
  ```

## Queues

### Methods
#### `enqueue(papers)`
  * Enqueue method accept papers as an argument and will add an item into the queue.
  ```
        let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
  ```
#### `dequeue()`
  * Dequeue method does not accept any arguments and removes the first item from the queue.
  ```
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
  ```
#### `serialize()`
  * Serialize method does not accept any arguments and returns a JSON string that represents the queue data.
  ```
      let testQueue = new Queue();

    testQueue.enqueue('NYT');
    testQueue.enqueue('WP');
    testQueue.enqueue('NE');
  
    let data = testQueue.serialize();

    expect(data).toBe('["NYT","WP","NE"]');
  ```

#### `deserialize(data)`
  * Deserialize accepts a JSON object as an argument.

  ```
  let testQueue = new Queue();
    let data = '["NYT","WP","NE"]';

    testQueue.deserialize(data);

    expect(testQueue.queue).toEqual(['NYT', 'WP', 'NE']);

  ```