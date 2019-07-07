// Given a sorted arr of integers, write a function called search, that accepts a value and
// returns the index where the value passed to the function is located. If the value is not found, return -1.


// Binary Search! - Divide and Conquer
// Log(n)
function search(arr, val) {
  let min = 0;
  let max = arr.length -1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle]

    console.log(middle, currentElement);

    if (arr[middle] < val) {
      min = middle +1;
    } else if (arr[middle] > val) {
      max = middle -1;
    } else {
      return middle;
    }
  }
  return -1;
}

search([1,2,3,5,6,8,9,12,15,16,29], 15)


// NAIVE APPROACH - start from left and loop through arr once to find the number or not
// O(n) = linear search
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
