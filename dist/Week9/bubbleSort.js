"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swap_1 = require("./swap");
function bubbleSort(arr) {
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                (0, swap_1.swap)(arr, j, j + 1);
                swapped = true;
                console.log(arr.join(", "));
            }
        }
        if (!swapped)
            break;
    }
    return arr;
}
