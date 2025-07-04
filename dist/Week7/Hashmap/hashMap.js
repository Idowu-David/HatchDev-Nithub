"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashMap = void 0;
const hashFunction_1 = require("./hashFunction");
const hashTable_1 = require("./hashTable");
const SIZE = 1024;
/**
 * A simple generic Hashmap implementation.
 *
 * Stores key-value pairs using a hash table with chaining.
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
        let update = false;
        let head = this.table.array[index];
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
    /**
     * Updates the value of a Key in the Hashmap
     * @param key
     * @param value
     */
    update(key, value) {
        const index = (0, hashFunction_1.hashDjb2)(key) % SIZE;
        let head = this.table.array[index];
        if (head) {
            while (head) {
                if (head.key === key) {
                    head.value = value;
                }
                head = head.next;
            }
        }
        else {
            console.log(`"${key}" doesn't exist`);
            return;
        }
    }
    /**
     * Displays the hashmap including the chained nodes
     *
     * @param map The hashmap
     */
    print(map) {
        if (map) {
            let hashStr = "{";
            let printed = false;
            let collision = false;
            for (let i = 0; i < SIZE; i++) {
                let node = this.table.array[i];
                while (node) {
                    if (printed)
                        hashStr += ", ";
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
    delete(key) {
        const index = (0, hashFunction_1.hashDjb2)(key) % SIZE;
        let head = this.table.array[index];
        let ptr = this.table.array[index];
        ;
        let value;
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
exports.HashMap = HashMap;
