// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Refactored solution O(2n) === O(n)
// Subtract the first number, and add the next new number = sliding window, instead of adding each trio possible
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);




// NAIVE SOLUTION - inefficient because of nested loops O(n^2)
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
      console.log(i, j);
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
