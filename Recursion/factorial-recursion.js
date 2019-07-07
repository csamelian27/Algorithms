// 4! === 4 factorial === 4 * 3 * 2 * 1


// iterative solution
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}


// recursive solution
function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num-1);
}





// PRACTICE!!!
// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it.
// E.g. factorial of four (4!) is equal to 24, because 4*3*2*1 equals 24.
// Factorial of zero (0!) is always 1.

// My solution!
function factorial(num) {
  if(num === 0) return 0;
  if (num === 1) return 1;
  return num * factorial(num-1);
}


// Lizzy solution
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
   if(num <= 1){
       return 1
   }
   return num * factorial(num-1)
}
