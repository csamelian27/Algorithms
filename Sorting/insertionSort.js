// Define a function called insertionSort that takes in an array
// Start by picking the second element in the array.
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order,
  // iterate through the sorted portion (i.e. to the left side) to place the element in the correct place.
// Repeate until the array is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // let current = arr[i];
    for (let j = i-1; j >= 0 && arr[j] > arr[i]; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = arr[i];
  }
  return arr;
}




// My attempt
// Kept wanting to forget arr[j] GREATER than arr[i] in conditional
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i-1; j >= 0 && arr[j] > arr[i]; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = arr[i];
  }
  return arr;
}

































//
