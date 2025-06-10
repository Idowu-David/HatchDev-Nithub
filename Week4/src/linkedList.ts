class NodeX<T> {
  value: T;
  next: NodeX<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  public head: NodeX<T> | null = null;
  tail: NodeX<T> | null = null;
  size: number = 0;

  print(): void {
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

  add(value: T) {
    const node = new NodeX(value);

    if (this.head === null) {
			this.head = this.tail = node;
			return this.head;
    } else {
      let current: NodeX<T> = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
		this.size++;
  }

  addAtBeginning(value: T) {
    const node = new NodeX(value);

    if (this.head === null) {
      this.head = this.tail = node;
    } else {
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
l.print()


