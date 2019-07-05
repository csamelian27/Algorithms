// Write a function binarySearch that accepts a sorted array and a value.
// Create a left pointer at the start of the array, and a right pointer at the end of the array.
// While the left pointer comes before the right pointer:
//      Create a pointer in the middle
//      If you find the value you want, return the index
//      If the value is too small, move the left pointer up
//      If the value is too large, move the right pointer down
// If you never find the value, return -1

// My Solution!
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length-1;

  let middle = Math.floor((left + right) / 2)

  while (left <= right) {
    if(arr[middle] === value) {
      return middle;
    }

    if (value < arr[middle]) {
      right = middle-1;
    } else {
      left = middle+1;
    }

    middle = Math.floor((left + right) / 2)
  }
  return -1;
}

binarySearch([1,2,3,4,5],2)
binarySearch([1,2,3,4,5],6)


// Lizzy Solution
function binarySearch(arr, val){
   let start = 0;
   let end = arr.length - 1;
   let mid = Math.floor( (start + end) / 2)

   while( arr[mid] !== val && start <= end ) {
    if (val < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor( (start + end) / 2)
    }
    return arr[mid] === val ? mid : -1
}
