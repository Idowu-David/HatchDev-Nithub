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
      if (element === this.array[i])
        return true;
    }
    return false;
  }

}

// const arr = new MyArray([2, "S", true]);
// console.log(arr.length);

// console.log(arr.push(9));
// console.log(arr);

// console.log(arr.length);
const fruits: string[] = ["apple", "banana", "cherry"];

const hasBanana = fruits.includes("banana");
const hasMango = fruits.includes("mango");

console.log("Does the array include banana?", hasBanana); // true
console.log("Does the array include mango?", hasMango);   // false


// console.log(arr.includes(1))
// TODO
// fill(), filter(), findIndex(), findLast(), forEach(), indexOf(), join(), map(), reverse(), shift(), sort(), splice(), unshift(),


