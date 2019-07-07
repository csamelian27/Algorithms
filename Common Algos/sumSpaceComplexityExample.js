function sum(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

// sums all items in array
// let total = 0 && let i = 0 are the only space takers, the rest takes time
// O(1) space! Constant = always same no matter the size of the input


function double(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i])
  }
  return newArr
}

// new arr gets longer and longer based on length of input
// O(n) space
