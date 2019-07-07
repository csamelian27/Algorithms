// Define a function called bubbleSort. It takes an array of numbers.
// Start looping from the end of the array towards the beginning with a variable called i.
// Start an inner loop with a variable called j from the beginning until i-1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

// Naive solution - O(n^2)
// Not optimized because as we bubble the largest values to the top, we only need to loop through the remainder of the array before the largest values.
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([37,45,29,8])


// Optimized version so that it doesn't resort the largest bubbled up values
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i-1; j++) {
      if (arr[j] > arr[j+1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}


// ES2015 version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx1]] = [arr[idx2], arr[idx1]];
  }

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i-1; j++) {
      if (arr[j] > arr[j+1]) {
        // SWAP!
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}
