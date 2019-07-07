// Write a function called selectionSort that takes in an array.
// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.


function selectionSort(arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i] < min) {
        min = arr[i]
      }
    }
    swap(arr, j, arr[min])
  }
  return arr;
}
