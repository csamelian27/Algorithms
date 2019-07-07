// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to that number passed to the function.

// My solution
function recursiveRange(num) {
  if(num <= 0) return 0;
  return num + recursiveRange(num-1);
}

recursiveRange(3) // 0 + 1 + 2 + 3 === 6
recursiveRange(0) // 0 + 0 === 0
recursiveRange(-2) // err



// Lizzy Solution
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num){
   if(num === 0){
       return 0
   }
   return num + recursiveRange(num-1)
}
