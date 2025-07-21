export function swap(arr: number[], a: number, b: number): void {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
