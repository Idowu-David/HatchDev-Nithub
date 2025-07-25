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
let a = [3, 0, 9, 5, -2];
function insertionS(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
