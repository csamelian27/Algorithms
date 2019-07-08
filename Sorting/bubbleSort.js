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
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
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


// An almost sorted array is an opportune time to use bubble sort
// Can optimize so that we check to see if we made any swaps on the previous pass; if so, continue, if not, end
// Sets to true at the beginning and sets to false when it swaps. Checks if true at the end to break out if never switched to false.
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i-1; j++) {
      if (arr[j] > arr[j+1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}


// BEST - ES2015 and noSwaps implementation
function bubbleSort(arr) {
  let noSwaps;

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i-1; j++) {
      if (arr[j] > arr[j+1]) {
        // SWAP!
        swap(arr, j, j+1);
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}


// Solving from memory - Try 1
// Messed up:
  // swap definition forgot arr[] part
  // remember i GREATER than 0, not less than
  // remember i--, not i++
  // remember j < i-1
  // remember to pass in indexes to swap method: j & j+1, not arr[j] & arr[j+1]
  // remember if(noSwaps) break; line - reason for noSwaps in the first place
function bubbleSort(arr) {
  let noSwaps;
  const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i-1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

















































































//
