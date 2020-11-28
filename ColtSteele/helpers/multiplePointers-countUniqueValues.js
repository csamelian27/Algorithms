// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.

// obj counter
const countUniqueValues1 = (arr) => {
    let obj = {};

    for (let val of arr) {
        obj[val];
    }

    return Object.keys(obj).length;
};

// set method
const countUniqueValues2 = (arr) => new Set(arr).size;

// multiplePointers method
const countUniqueValues3 = (arr) => {
    if (!arr.length) return 0;

    let leftPointer = 0;

    for (let rightPointer = 1; rightPointer < arr.length; rightPointer++) {
        if (arr[leftPointer] !== arr[rightPointer]) {
            leftPointer++;
            arr[leftPointer] = arr[rightPointer];
        }
    }

    return leftPointer + 1;
};

console.log(countUniqueValues3([1, 2, 2, 3, 4, 5, 5, 5, 7, 8]));
