import { swap } from "./swap";

function insertionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(arr, j, j - 1);
      j--;
    }
  }
  return arr;
}
