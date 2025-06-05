// O(n) - Linear Time
function sumArray(arr: number[]): number {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// O(n^2) - Quadratic Time
function hasDuplicates(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

// O(log n) - Logarithmic time
function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}


const array = [1, 2, 3, 4, 1, 6, 7];
console.log(sumArray(array));

console.log(hasDuplicates(array));
console.log(binarySearch(array, 6));