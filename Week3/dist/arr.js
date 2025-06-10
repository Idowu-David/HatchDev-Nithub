"use strict";
class ArrayD {
    constructor() {
        this.data = {};
        this.length = 0;
    }
    pop() {
        if (this.length === 0)
            return undefined;
        const last = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return last;
    }
    toArray() {
        const arr = [];
        for (let i = 0; i < this.length; i++)
            arr.push(this.data[i]);
        return arr;
    }
    push(...items) {
        for (let i = 0; i < items.length; i++) {
            this.data[this.length] = items[i];
            this.length++;
        }
        return this.length;
    }
    shift() {
        if (this.length === 0)
            return undefined;
        const first = this.data[0];
        for (let i = 1; i < this.length; i++) {
            this.data[i - 1] = this.data[i];
        }
        delete this.data[this.length - 1];
        this.length--;
        return first;
    }
    unshift(...items) {
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
    map(callback) {
        const newArray = new Array();
        for (let i = 0; i < this.length; i++)
            newArray.push(callback(this.data[i]));
        return newArray;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        return this.data[index];
    }
    set(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of range");
        }
        this.data[index] = value;
    }
    indexOf(value) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === value)
                return i;
        }
        return -1;
    }
    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this.data[i], i);
        }
    }
}
