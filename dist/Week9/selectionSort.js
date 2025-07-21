"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swap_1 = require("./swap");
function selectionSort(arr) {
    let minIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        (0, swap_1.swap)(arr, i, minIdx);
    }
    return arr;
}
