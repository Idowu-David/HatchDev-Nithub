class ArrayD<T> {
  private data: { [key: number]: T } = {};
  public length: number = 0;

  constructor() {}

  pop(): T | undefined {
    if (this.length === 0) return undefined;
    const last = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return last;
  }

  toArray(): T[] {
    const arr: T[] = [];
    for (let i = 0; i < this.length; i++) arr.push(this.data[i]);
    return arr;
  }

  push(...items: T[]): number {
    for (let i = 0; i < items.length; i++) {
      this.data[this.length] = items[i];
      this.length++;
    }
    return this.length;
  }
  shift(): T | undefined {
    if (this.length === 0) return undefined;
    const first = this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.length - 1];
    this.length--;
    return first;
  }

  unshift(...items: T[]): number {
    const newItemsCount = items.length;
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + newItemsCount] = this.data[i];
    }
    for (let i = 0; i < newItemsCount; i++) {
      this.data[i] = items[i];
    }
    this.length += newItemsCount;
    return this.length;
  }

  map<U>(callback: (item: T) => U): Array<U> {
    const newArray = new Array<U>();
    for (let i = 0; i < this.length; i++) newArray.push(callback(this.data[i]));
    return newArray;
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;
    return this.data[index];
  }

  set(index: number, value: T): void {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }
    this.data[index] = value;
  }

  indexOf(value: T): number {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === value) return i;
    }
    return -1;
  }

  forEach(callback: (item: T, index: number) => void): void {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i);
    }
  }
}


