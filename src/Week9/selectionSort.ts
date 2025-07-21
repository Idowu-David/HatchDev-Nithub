import { swap } from "./swap";

function selectionSort(arr: number[]): number[] {
  let minIdx = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[minIdx])
				minIdx = j;
		}
		swap(arr, i, minIdx);
	}
	return arr;
}
