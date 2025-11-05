class Queue{
    constructor() {
        this.item = [];
    }

    enqueue(value) {
        this.item.push(value)
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.item.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.item[0]
    }
    isEmpty() {
        return this.item.length === 0;
    }

    print() {
        console.log(this.item)
    }
}

const queue = new Queue();

console.log(queue.peek());
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(50);
queue.enqueue(70);

console.log(queue.peek())
queue.dequeue()
queue.print();