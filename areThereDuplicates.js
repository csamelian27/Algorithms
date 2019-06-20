// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Solution 1 (frequency counter)
// Time: O(n)
// Space: O(n)
const areThereDuplicates = (...args) => {
  let lookup = {};

  for (let val of args) {
    if (lookup[val]) return true;
    lookup[val] = (lookup[val] || 0) + 1;
  }

  return false;
};


// Solution 2 (multiple pointers)
// Time: O(nlogn)
// Space: O(1)
const areThereDuplicates = (...args) => {
  args.sort();

  let i = 0;

  for (let j = 1; j < args.length; i++, j++)
    if (args[i] === args[j])
      return true;

  return false;
};


// Solution 3
const areThereDuplicates = () => {
  return new Set(arguments).size !== arguments.length;
};

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true
