var MyArray = /** @class */ (function () {
    function MyArray(arr) {
        this.length = 0;
        this.array = [];
        var i = 0;
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
    MyArray.prototype.push = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        for (var i = 0; values[i] !== undefined; i++) {
            this.array[this.length++] = values[i];
        }
        return this.length;
    };
    /**
     * Removes the last element from the array and returns it.
     *
     * @returns The removed element, or `undefined` if the array is empty
     */
    MyArray.prototype.pop = function () {
        if (this.length === 0)
            return undefined;
        var last = this.array[this.length - 1];
        var newArray = [];
        for (var i = 0; i < this.length - 1; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
        this.length--;
        return last;
    };
    /**
     * Checks whether the array includes a certain element.
     *
     * @param element The element to search for.
     * @returns `true` if the element is found, otherwise `false`
     */
    MyArray.prototype.includes = function (element) {
        for (var i = 0; i < this.length; i++) {
            if (element === this.array[i])
                return true;
        }
        return false;
    };
    return MyArray;
}());
// const arr = new MyArray([2, "S", true]);
// console.log(arr.length);
// console.log(arr.push(9));
// console.log(arr);
// console.log(arr.length);
var fruits = ["apple", "banana", "cherry"];
console.log('Hello');
// console.log(arr.includes(1))
// TODO
// fill(), filter(), findIndex(), findLast(), forEach(), indexOf(), join(), map(), reverse(), shift(), sort(), splice(), unshift(),
