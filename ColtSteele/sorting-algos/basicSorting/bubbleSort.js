// - Pseudocode:
//  - Start looping with a var called i at the end of the array towards the beginning
//  - Then start an inner loop with a var called j from the beginning until i - 1
//  - If arr[j] > arr[j + 1], swap those two values!
//  - Return the sorted array

// function swap(arr, idx1, idx2) {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// #1 & #2 are O(n^2) time. For nearly sorted data, like #3, it hits noSwaps, making it O(n) time as best case scenario.
// super inefficient
const bubbleSort1 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }
    return arr;
};

// Based on pseucode - is based on i, which decreases after each iteration because the largest values will have been sorted
const bubbleSort2 = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }
    return arr;
};

// noSwaps variable lets us break out if the arr is sorted before the iterations are completed - good for nearly sorted data
const bubbleSort3 = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        // loops meet in the middle, basically left < right is conditional, just add - 1 because it's an index
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
            noSwaps = false;
        }
        if (noSwaps) break;
    }
    return arr;
};

console.log(bubbleSort2([2,15,30,4,12,9]));
