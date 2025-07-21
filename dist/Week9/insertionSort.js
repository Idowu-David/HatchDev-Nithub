"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swap_1 = require("./swap");
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        while (j > 0 && arr[j] < arr[j - 1]) {
            (0, swap_1.swap)(arr, j, j - 1);
            j--;
        }
    }
    return arr;
}
