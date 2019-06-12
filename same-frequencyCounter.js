//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it’s corresponding value squared in the second array. The frequency of values must be the same.

// NAIVE APPROACH -- O(n^2) because indexOf is also a loop
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1)
  }
  return true
 }

same([1,2,3,2], [9,1,4,4])

// BETTER APPROACH O(2n) === O(n)
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }

  let counter1 = {}
  let counter2 = {}

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1
  }

  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1
  }

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false
    }
    if(counter2[key ** 2] !== counter1[key]) {
      return false
    }
  }
  return true
}

same([1,2,3,2], [9,1,4,4])














//
