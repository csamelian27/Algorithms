// Write a function alled sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or underfined if a pair does not exist.

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        }
    }
    return undefined;
};

console.log(sumZero([-4, -3, 3, 10, 11, 12, 13, 17]));
