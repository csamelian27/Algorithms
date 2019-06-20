// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Lizzy Solution & Colt Steele Solution
// if they're not the same, increment both
// if they're the same, increment second, check equality, if different increment first and replace value with second
function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    let count = 0;
    for(let i=1; i < arr.length; i++) {
        if(arr[i] !== arr[count]) {
            count++;
            arr[count] = arr[i]
        }
    }
    return count + 1;
}

countUniqueValues([1, 3, 4, 4, 5, 5, 7, 10])
