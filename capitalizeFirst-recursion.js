// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

// My Solution! & Lizzy's
function capitalizeFirst(arrOfStr) {
  let result = [];
  if(!arrOfStr.length) return result;
  result.push(arrOfStr[0][0].toUpperCase() + arrOfStr[0].slice(1));
  result = result.concat(capitalizeFirst(arrOfStr.slice(1)));
  return result;
}



// Colt's Solution!
function capitalizeFirst(arr) {
  if(arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  const res = capitalizeFirst(arr.slice(0, -1));
  const str = arr.slice(arr.length-1)[0][0].toUpperCase() + res.push(str);
  return res;
}
