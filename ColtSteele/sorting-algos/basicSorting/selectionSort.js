// - Pseudocode:
//  - Store the first element as the smallest value you've seen so far.
//  - Compare this item to the next item in the array until you find a smaller number.
//  - If a smaller number is found, designate that smaller number to be the new min(store the index of that number, not the value) and continue until the end of the array.
//  - If the min is not the value(index) you initially began with, swap the two values.
//  - Repeat this with the next element until the array is sorted.
//  - Return the sorted array

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// O(n^2) - only one scenario where this is better than bubble sort is for memory efficiency
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // if (arr[min] !== arr[i]) swap(arr, min, i);
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            // swap(arr, i, min);
        }
    }
    return arr;
};

console.log(selectionSort([5, 1, 12, 6, 19, 7]));
