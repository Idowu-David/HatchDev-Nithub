"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashFunction_1 = require("./hashFunction");
const hashTable_1 = require("./hashTable");
const SIZE = 1000;
/**
 * A simple generic Hashmap implementation.
 *
 * Stores key-value pairs usinga hash table with chaining.
 *
 * @typeParam T - The type of value stored in the map.
 */
class HashMap {
    constructor(size = SIZE) {
        this.table = new hashTable_1.HashTable(size);
    }
    /**
     * Adds an element to the hash table
     *
     * @param key
     */
    set(key, value) {
        const node = new hashTable_1.HashNode(key, value);
        const index = (0, hashFunction_1.hashDjb2)(key) % SIZE;
        let head = this.table.array[index];
        if (head) {
            // position is not empty
            node.next = this.table.array[index];
        }
        this.table.array[index] = node;
    }
    /**
     * Retrieves the value associated with a key
     *
     * @param key
     * @returns The value of the key, or NULL if the key is not found
     */
    get(key) {
        let index = (0, hashFunction_1.hashDjb2)(key) % SIZE;
        let ptr = this.table.array[index];
        if (ptr) {
            while (ptr) {
                if (ptr.key === key) {
                    return ptr.value;
                }
                ptr = ptr.next;
            }
        }
        else {
            return null;
        }
    }
    print(map) {
        if (map) {
            let hashStr = "{";
            let printed = 0;
            for (let i = 0; i < SIZE; i++) {
                let node = this.table.array[i];
                while (node) {
                    if (printed)
                        hashStr += ", ";
                    hashStr += node.key;
                    hashStr += ": ";
                    hashStr += node.value;
                    printed = 1;
                    node = node.next;
                }
            }
            hashStr += "}";
            console.log(hashStr);
        }
    }
}
const map = new HashMap();
map.set("David", 1);
map.set("Heyy", 2);
map.set("Hello", 3);
map.set("Hello", 3);
map.set("Hello", 3);
map.set("Hello", 3);
// map.set("depravement", 4);
// map.set("subgenera", 5);
map.print(map);
