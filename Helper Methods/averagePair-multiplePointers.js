// Write a function called averagePair. Given a sorted arr of integers and a target average,
// determine if there is a pair of values in the arr where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Lizzy Solution
function averagePair(arr, avg){

  if(arr.length < 2) return false

  let left = 0
  let right = arr.length - 1

  while(left < right){
      let temp = (arr[left] + arr[right])/2
      if(temp > avg){
          right--
      } else if(temp < avg){
          left++
      } else if(temp === avg){
        return true
      }
  }
  return false
}


// Colt Solution
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
