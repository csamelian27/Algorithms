// Write a function called pivot
// It will help to accept three arguments: an array, a start index, and an end index
  // (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
  // If the pivot is greater than the current element, increment the pivot index variable and then swap
  // the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot indexg
// Return the pivot index

function pivot(arr, start=0, end=arr.length+1) {
  let pivot = 0;
}

let arr = [5,2,1,8,4,7,6,3]
pivot(arr); // 4 - returns index;
arr; // order of array around pivot point of 4 does not matter as long as they're all less on the left & greater on the right
