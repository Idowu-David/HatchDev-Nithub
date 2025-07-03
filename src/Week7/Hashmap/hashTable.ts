/**
 * Represents a single Node in a hash table
 *
 * Each node stores a key-value pair and a reference(next) to the next node in the chain.
 * @typeParam T - The type of the value being stored.
 */
export class HashNode<T> {
  key: string;
  value: T;
  next: HashNode<T> | null = null;

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
  }
}

/**
 * HashTable data structure that stores key-value pairs using an array of linked lists.
 * Supports separate chaining for collision.
 *
 * @typeParam T - The type of values stored in the hash table.
 */
export class HashTable<T> {
  size: number;
  array: (HashNode<T> | null)[];

  constructor(size: number) {
    this.size = size;
    this.array = new Array(size).fill(null);
  }
}
