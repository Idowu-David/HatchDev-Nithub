import { hashDjb2 } from "./hashFunction";
import { HashNode, HashTable } from "./hashTable";

const SIZE: number = 1024;

/**
 * A simple generic Hashmap implementation.
 *
 * Stores key-value pairs using a hash table with chaining.
 *
 * @typeParam T - The type of value stored in the map.
 */
export class HashMap<K, V> {
  table: HashTable<K, V>;

  constructor(size: number = SIZE) {
    this.table = new HashTable(size);
  }

  /**
   * Adds an element to the hash table
   *
   * @param key
   */
  set(key: K, value: V) {
    const node = new HashNode(key, value);
    const index = hashDjb2(key) % SIZE;
    let update = false;

    let head: HashNode<K, V> | null = this.table.array[index];

    if (head) {
      // position is not empty
      while (head) {
        // duplicate key
        if (head.key === key) {
          this.update(key, value);
          update = true;
          break;
        }
        head = head.next;
      }
      if (!update) {
        node.next = this.table.array[index];
      }
    }
    this.table.array[index] = node;
  }

  /**
   * Retrieves the value associated with a key
   *
   * @param key
   * @returns The value of the key, or NULL if the key is not found
   */
  get(key: string): V | null | undefined {
    let index = hashDjb2(key) % SIZE;
    let ptr: HashNode<K, V> | null = this.table.array[index];

    if (ptr) {
      while (ptr) {
        if (ptr.key === key) {
          return ptr.value;
        }
        ptr = ptr.next;
      }
    } else {
      return null;
    }
  }

  /**
   * Updates the value of a Key in the Hashmap
   * @param key
   * @param value
   */
  update(key: K, value: V): void {
    const index = hashDjb2(key) % SIZE;

    let head: HashNode<K, V> | null = this.table.array[index];
    if (head) {
      while (head) {
        if (head.key === key) {
          head.value = value;
        }
        head = head.next;
      }
    } else {
      console.log(`"${key}" does not exist`);
      return;
    }
  }

  /**
   * Displays the hashmap including the chained nodes
   *
   * @param map The hashmap
   */
  print(map: HashMap<K, V>): void {
    if (map) {
      let hashStr = "{";
      let printed = false;
      let collision = false;

      for (let i = 0; i < SIZE; i++) {
        let node = this.table.array[i];
        while (node) {
          if (printed) hashStr += ", ";
          hashStr += `[${node.key}: ${node.value}]`;
          if (node.next) {
            hashStr += "->";
            collision = true;
          }
          printed = true;
          node = node.next;
        }
      }
      hashStr += "}";
      console.log(hashStr);
    }
  }
  // TODO - delete
  /**
   * Remove a key from a hashmap.
   *
   * @param key
   *
   * @returns the value of the node, or null if the key doesn't exist.
   */
  delete(key: string): V | null {
    const index = hashDjb2(key) % SIZE;
    let head: HashNode<K, V> | null = this.table.array[index];
    let ptr: HashNode<K, V> | null = this.table.array[index];

    if (head) {
      // first key/node
      if (head.key === key) {
        this.table.array[index] = head.next;
        head.next = null;
        return head.value;
      }
      head = head.next;
      while (head) {
        // ptr = head;
        if (head.key === key) {
          if (ptr) {
            ptr.next = head.next;
            head.next = null;
            return head.value;
          }
        }
        ptr = head;
        head = head.next;
      }
    }
    console.log(`"${key}" does not exist`);
    return null;
  }
}
