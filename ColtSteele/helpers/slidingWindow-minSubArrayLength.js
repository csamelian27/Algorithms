// Write a function called minSubArrayLength which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

const minSubArrayLength = (arr, sum) => {
    let total = 0;
    let pointerA = 0;
    let pointerB = 0;
    let minLength = Infinity;

    while (pointerA < arr.length) {
        if (total < sum && pointerB < arr.length) {
            total += arr[pointerB];
            pointerB++;
        } else if (total >= sum) {
            minLength = Math.min(minLength, pointerB-pointerA);
            total -= arr[pointerA];
            pointerA++;
        } else {
            break;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7));
