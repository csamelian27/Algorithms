// sorting algos, binary search trees use divide and conquer
// instead of starting left to right, divide into smaller chunks

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index
// where the value passed to the function is located. If the value is not found, return -1.

// O(n) - not divide and conquer
const search1 = (arr, int) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === int) return i;
    }
    return -1;
}

// O(log n) - binary search - divide array
const search2 = (arr, int) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let val = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

console.log(search2([1,2,3,4,5,6], 4)); // should return index 3;
