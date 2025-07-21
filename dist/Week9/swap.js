"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = swap;
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
