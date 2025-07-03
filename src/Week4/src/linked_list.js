"use strict";
class LNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class linkedList {
    constructor(initialValue) {
        this.head = null;
    }
    add(value) {
        const newNode = new LNode(value);
        if (this.head === null)
            this.head = newNode;
        else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
}
const node = new LNode(2);
const node1 = new LNode(3);
console.log(node);
