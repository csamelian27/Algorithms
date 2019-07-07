// Merge helper function definition:
// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// This function should run in O(n + m) time and space and should not modify the parameters passed to it.

// Pseudocode for merge helper function:
// Write a function called merge that takes in two arrays.
// Create an empty array, take a look at the smallest values in each input array.
// While there are still values we haven't looked at...
    // If the value in the first array is smaller than the value in the second array, push the value in the first array
    // into our results and move on to the next value in the first array.

    // If the value in the first array is larger than the value in the second array, push the value in the second array
    // into our results and move on to the next value in the second array.

    // Once we exhaust one array, push in all remaining values from the other array.


// Merge helper function for merge sort
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

merge([1,10,50], [2,14,99,100])
