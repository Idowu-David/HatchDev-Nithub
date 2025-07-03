"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = exports.HashNode = void 0;
/**
 * Represents a single Node in a hash table
 *
 * Each node stores a key-value pair and a reference(next) to the next node in the chain.
 * @typeParam T - The type of the value being stored.
 */
class HashNode {
    constructor(key, value) {
        this.next = null;
        this.key = key;
        this.value = value;
    }
}
exports.HashNode = HashNode;
/**
 * HashTable data structure that stores key-value pairs using an array of linked lists.
 * Supports separate chaining for collision.
 *
 * @typeParam T - The type of values stored in the hash table.
 */
class HashTable {
    constructor(size) {
        this.size = size;
        this.array = new Array(size).fill(null);
    }
}
exports.HashTable = HashTable;
