// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// My solution!
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([3,2,0])
productOfArray([0,0,0])
productOfArray([])


// Lizzy solution
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array){
    if(array.length===0){
        return 1
    }
    return array[0] * productOfArray(array.slice(1))
}
