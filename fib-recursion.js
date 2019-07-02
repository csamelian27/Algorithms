// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 ....which starts with 1 and 1,
// and where every number thereafter is equal to the sum of the previous two numbers.

// My solution!
function fib(num) {
  if(num <= 2) return 1;
  return fib(num-1) + fib(num-2);
}

fib(0) // 1;
fib(-3) // err;
fib(5) // 5; 1 + 1 + sum + sum + sum

// 1 + 1 === 2
// slice(1) = 1 + 2 === 3
// slice(1) = 2 + 3 === 5
// slice(1) = 3 + 5 === 8

fib(5)


// Lizzy solution
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
  // add whatever parameters you deem necessary - good luck!
  if(num <= 2){
      return 1
  }
  return fib(num-1) + fib(num-2)
}
