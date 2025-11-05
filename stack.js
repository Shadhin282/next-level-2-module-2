class Stack {
    constructor() {
        this.item = [];
    }

    push(a) {
        return this.item.push(a);
    }
    pop() {
        return this.item.pop();
    }
    peek() {
        
        return this.item[this.item.length -1]
    }
    isEmpty() {
        if(this.item.length === 0) {
            return true
        }
    }
    print() {
        console.log(this.item.slice().reverse().join(' -> '))
    }
}

const stack = new Stack();
console.log(stack.peek())
console.log(stack.isEmpty())
stack.push(10);
stack.push(30);
stack.push(50);
stack.push(70);
// stack.pop()
// stack.pop()
// stack.pop()
// stack.peek()
stack.print()
console.log(stack.peek())
console.log(stack.peek())


