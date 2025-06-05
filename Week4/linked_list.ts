class LNode {
  value: number;
  next: LNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LNode | null;

  constructor(initialValue: number) {
    this.head = null;
  }

  add(value: number) {
    const newNode = new LNode(value);

    if (this.head === null) this.head = newNode;
    else {
      let currentNode: LNode = this.head;
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
