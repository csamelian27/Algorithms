// Write a function called mergeSort that takes in an array.
// Break up the array into halves until you have arrays that are empty or have one element.
  // Base case: array.length <= 1
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array

// Helper merge function that takes in two sorted arrays.
// Use recursively
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


function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right);
}
