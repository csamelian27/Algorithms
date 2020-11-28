// - Pseudocode:
//  - Start by picking the second element in the array
//  - Now compare the second element with the one before it and swap if necessary
//  - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e.the left side) to place the element in the correct place
//  - Repeat until the array is sorted & return it

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Nearly sorted data is fast, reverse data it's real bad, data coming in live and streaming data work really well for this since it keeps sorted as it inserts
// duplicates the leftVal to the rightVal automatically unless it reaches a case where the leftVal is less than the original rightVal, then you replace the last duplicate you created with the og currentVal
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }
    return arr;
};

console.log(insertionSort([5, 2, 12, 19, 6, 20, 9]));
