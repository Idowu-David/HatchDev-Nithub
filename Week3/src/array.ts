class MyArray<T> {
  public length: number = 0;
  private array: T[] = [];

  constructor(arr?: T[]) {
    let i = 0;
    if (arr) {
      while (arr[i] !== undefined) {
        this.array[i] = arr[i];
        i++;
      }
      this.length = i;
    }
  }

  /**
   * Adds one or more elements to the end of the array.
   *
   * @param values  The values to be added.
   * @returns The new length of the array.
   */
  push(...values: T[]): number {
    for (let i = 0; values[i] !== undefined; i++) {
      this.array[this.length++] = values[i];
    }
    return this.length;
  }

  /**
   * Removes the last element from the array and returns it.
   *
   * @returns The removed element, or `undefined` if the array is empty
   */
  pop(): T | undefined {
    if (this.length === 0) return undefined;
    const last = this.array[this.length - 1];
    const newArray: T[] = [];
    for (let i = 0; i < this.length - 1; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
    this.length--;
    return last;
  }

  /**
   * Checks whether the array includes a certain element.
   *
   * @param element The element to search for.
   * @returns `true` if the element is found, otherwise `false`
   */
  includes(element: T): boolean {
    for (let i = 0; i < this.length; i++) {
      if (element === this.array[i]) return true;
    }
    return false;
  }

  /**
   * Returns the first index at which a given element can be found, or -1 if it’s not present.
   * @param searchElement — The value to locate in the array.
   * @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0
   */
  indexOf(searchElement: T, fromIndex?: number): number {
    for (let i = fromIndex ?? 0; i < this.length; i++) {
      if (this.array[i] == searchElement) return i;
    }
    return -1;
  }

  /**
   * Fills all elements in an array from a start index to an end index with a static value.
   * @param value to fill the array with
   * @param start optional index to start with
   * @param end optional index to end with
   */
  fill(value: T, start?: number, end?: number): void {
    for (let i = start ?? 0; i < (end ?? this.length); i++) {
      this.array[i] = value;
    }
  }

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   *
   * @param callback A function that accepts up to three arguments. The filter method calls the callback function one time for each element in the array.
   */
  // filter(callback: (value: T, index: number, array: T[]) => boolean);

  /**
   * Adds all the elements of an array into a string, separated by the specified separator string.
   *
   * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string {
    if (!separator) separator = ",";
    let joinStr = "";
    for (let i = 0; i < this.length; i++) {
      joinStr += this.array[i];
      if (i < this.length - 1) joinStr += separator;
    }
    return joinStr;
  }

  /**
   * Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
   */
  shift(): T | undefined {
    if (this.length === 0) return undefined;
    const first = this.array[0];
    const shiftArray: T[] = [];
    for (let i = 0; i < this.length - 1; i++) {
      shiftArray[i] = this.array[i + 1];
    }
    this.array = shiftArray;
    this.length--;
    return first;
  }

  /**
   * Inserts new elements at the start of an array, and returns the new length of the array.
   *
   * @param items Elements to insert at the start of the array.
   */
  unshift(...items: T[]): number {
    const newArray: T[] = [];
    let count: number = 0;
    for (let i = 0; items[i] !== undefined; i++) {
      newArray[i] = items[i];
      count++;
      this.length++;
    }
    let i = 0;
    for (let j = count; j < this.length; j++) {
      newArray[j] = this.array[i++];
    }
    console.log(`New: ${newArray}`);
    this.array = newArray;
    console.log(newArray);
    return this.length;
  }

  /**
   * Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
   */
  reverse(): this {
    let j: number = this.length - 1;
    let temp: T;
    for (let i = 0; i < this.length / 2; i++, j--) {
      temp = this.array[i];
      this.array[i] = this.array[j];
      this.array[j] = temp;
    }
    return this;
  }

  // /**
  //  * Sorts an array in place. This method mutates the array and returns a reference to the same array.
  //  */
  // sort(): this {

  // }

  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start — The zero-based location in the array from which to start removing elements.
   * @param deleteCount — The number of elements to remove
   * @returns — An array containing the elements that were deleted.
   */
  // splice(start: number, deleteCount?: number): T[] {
  // }
}

// const arr = new MyArray([2, "S", true, false, 'Hello', 10]);
// // console.log(arr.length);

// console.log(arr);
// console.log(arr.reverse())
// console.log(arr);
// // console.log(arr);

// // console.log(arr.length);
// // console.log(`IndexOf: ${arr.indexOf(3)}`);
// // arr.fill("true");
// // console.log(arr);

// // console.log(arr);
// // console.log(`Shift: ${arr.shift()}`);
// // console.log(arr);
// // // console.log(arr.shift());
// // // console.log(arr);

// // console.log(arr.unshift(10, 't', 19, 'man'));
// // console.log(arr);
// // // console.log(arr.join(' # '));

const a = [1, 2, 3, 4];
// console.log(a.splice());
// // // TODO
// // fill(), filter(), findIndex(), findLast(), forEach(), indexOf(), join(), map(), reverse(), shift(), sort(), splice(), unshift(),


const arr = new MyArray([2, "S", true, false, "Hello", 10]);
console.log("Original array:", arr);

// 🔄 Test reverse()
console.log("Reversed:", arr.reverse()); // Expect: [10, 'Hello', false, true, 'S', 2]
console.log("After reverse (should be same as above):", arr);

// 🔍 Test indexOf()
console.log(`IndexOf "Hello":`, arr.indexOf("Hello")); // Expect: some valid index
console.log(`IndexOf 999 (non-existent):`, arr.indexOf(999)); // Expect: -1

// 🧪 Test fill()
arr.fill("FILL", 1, 4);
console.log("After fill from index 1 to 4:", arr); // Expect: [10, 'FILL', 'FILL', 'FILL', 'S', 2]

// 🧹 Test shift()
const shifted = arr.shift();
console.log("Shifted value:", shifted); // Expect: 10
console.log("After shift:", arr); // Expect: ['FILL', 'FILL', 'FILL', 'S', 2]

// 🚀 Test unshift()
const newLength = arr.unshift(10, "t", 19, "man");
console.log("New length after unshift:", newLength); // Expect: updated length
console.log("After unshift:", arr); // Should show new elements at the front

// 🧵 Test join()
console.log("Joined with ' # ':", arr.join(" # ")); // Expect: joined string

// 🧠 Test includes()
console.log("Includes 'S':", arr.includes("S")); // true/false depending on previous state
console.log("Includes 'FILL':", arr.includes("FILL")); // true if still in array

// 🧪 Test pop()
const popped = arr.pop();
console.log("Popped value:", popped); // Expect: last item
console.log("After pop:", arr);

// ✅ Final state
console.log("Final array:", arr);
console.log("Final length:", arr.length);
