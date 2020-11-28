// - This function accepts a sorted array and a value
// - Create a left pointer at the start of the array, and a right pointer at the end of the array
// - While the left pointer comes before the right pointer
//   - Create a pointer in the middle
//   - If you find the value you want, return the index
//   - If the value is too small, move the left pointer up
//   - If the value is too large, move the right pointer down
//   - If you never find the value, return -1

const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let middleVal = arr[middle];

        // must shift off of middle cause we already checked it and know it's not the val we're searching for
        if (middleVal > val) right = middle - 1;
        else if (middleVal < val) left = middle + 1;
        else if (middleVal === val) return middle
    }

    return -1;
}

console.log(binarySearch([1, 4, 7, 9, 12, 15, 19], 4));
