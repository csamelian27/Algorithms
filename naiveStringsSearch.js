// Suppose you want to count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking pairs of characters individually

// Define a function that accepts two strings, a larger string and a substr to search for
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

function stringSearch(string, substr) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (string[i+j] !== substr[j]) {
        break;
      }
      if(j === substr.length -1) {
        count++;
      }
    }
  }
  return count;
}

stringSearch("Harold said haha in hamburg")
