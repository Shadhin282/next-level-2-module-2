class Node{
    constructor(value) {
        this.value = value; 
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value)
        // if this linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if the linked list is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    };
    
    prepend(value) { 
        const newNode = new Node(value)
        // if this linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if the linked list is not empty
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    };

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error('Index out of bound: shohoj sorol basai muri khaa')
            return undefined;
        }

        // insert is in the start of linkedlist
        if (index === 0) {
            return this.prepend(value);
        }
        // if index is start at the last of linked list
        if (index === this.length) {
            return this.append(value);
        }

        const leadingNode = this._traverseToIndex(index-1)
        const holdingNode = leadingNode.next;

        const newNode = new Node(value);

        leadingNode.next = newNode;
        newNode.next = holdingNode

        this.length++;

        return this;
     };

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;

            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;
            return this.head.value;
        }
        const leadingNode = this._traverseToIndex(index - 1);
        const nodeToRemove = leadingNode.next;
        leadingNode.next = nodeToRemove.next;

        if (leadingNode.next === null) {
            this.tail = leadingNode;
        }
        return nodeToRemove.value;
     };

    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;

        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
     }

    print() {
        let currentNode = this.head
        const arr = []
        while(currentNode !== null){
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(arr.join(' -> '),' -> null')
     };
}

const LinkedList1 = new LinkedList()

LinkedList1.append("A");
LinkedList1.append('B');
LinkedList1.append('C');
LinkedList1.append('D');

LinkedList1.print()
LinkedList1.remove(2)
LinkedList1.print();