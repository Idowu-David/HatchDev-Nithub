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
    /**
     * prints the LinkedList
     *
     * @returns
     */
    print() {
        if (!this.head) {
            console.log("[]");
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
    /**
     * Adds a new node at the end of the linked list
     *
     * @param value value of the node.
     */
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
            current.next = this.tail = node;
        }
        this.size++;
    }
    /**
     * Adds a new node at the beginning of the linked list.
     *
     * @param value value of the node.
     */
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
    /**
     * Deletes a node in the linked list.
     *
     * @param node value on the node to be deleted.
     * @return the deleted node.
     */
    popNode(node) {
        // loop through the linked list
        // on each iter, check if node == current value
        // check the position of the node to be deleted
        // if current.next == null - tail deletion (update tail)
        // if this.head.next == null - head deletion (only node)
        // if node == this.head.value - head deletion(update head)
        if (!this.head)
            return null;
        let current = this.head;
        let ptr = current;
        while (current) {
            if (current.value === node) {
                if (current === this.head) {
                    this.head = this.head.next;
                    current = current.next = null;
                }
                else if (current === this.tail || current.next === null) {
                    this.tail = ptr;
                    ptr.next = current = null;
                }
                else {
                    ptr.next = current.next;
                    current = current.next = null;
                }
                return ptr;
            }
            ptr = current;
            current = current.next;
        }
        return null;
    }
}
const l = new LinkedList();
l.add(1);
l.print();
l.add(2);
l.print();
l.addAtBeginning(4);
l.print();
l.addAtBeginning(7);
l.print();
l.addAtBeginning(6);
l.add(10);
l.print();
l.popNode(10);
l.print();
