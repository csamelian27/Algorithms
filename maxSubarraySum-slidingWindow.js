// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// NAIVE SOLUTION
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    // If want more nums than arr length === null
    return null;
  }

  // Accounts for arr of all negative numbers
  let max = -Infinity;
  // loop starts at 0 and goes until almost end of arr, stop when there are still num amount of digits left to sum
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
