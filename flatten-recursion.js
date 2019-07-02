// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// My solution! & Lizzy's
function flatten(arrOfArr) {
  let newArr = [];

  arrOfArr.forEach(arr => {
    if (Array.isArray(arr)) {
      newArr.push(...flatten(arr))
    } else {
      newArr.push(arr)
    }
  })
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3



// Colt Solution!
function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if(Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}
