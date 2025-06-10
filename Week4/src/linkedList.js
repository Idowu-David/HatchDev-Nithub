"use strict";
class NodeX {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    print() {
        if (!this.head) {
            console.log('[]');
            return;
        }
        let current = this.head;
        let nodeStr = "";
        while (current.next) {
            nodeStr += String(`[${current.value}]`);
            nodeStr += "->";
            current = current.next;
        }
        nodeStr += String(`[${current.value}]`);
        console.log(nodeStr);
    }
    add(value) {
        const node = new NodeX(value);
        if (this.head === null) {
            this.head = this.tail = node;
            return this.head;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    addAtBeginning(value) {
        const node = new NodeX(value);
        if (this.head === null) {
            this.head = this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
}
const l = new LinkedList();
l.add(1);
l.add(2);
l.addAtBeginning(4);
l.addAtBeginning(7);
l.addAtBeginning(6);
// l.add(3);
// l.add(3);
// l.add(3);
// l.add(3);
l.print();
