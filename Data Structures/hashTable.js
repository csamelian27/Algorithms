// Basic Hash Function:
hashFunction = (str) => {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    total += ((str.charCodeAt(0) - 96) % 11);
  }
  return total;
}

// Problems:
// Only hashes strings (we won't worry about this)
// Not constant time - it's O(n) time because it depends on length of string
// Could be more random & scattered using prime numbers
hashFunction = (key, arrayLength) => {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;
}

// Refining our Hash (a little):
// Increase randomness & reduce time complexity
hashFunction = (key, arrayLength) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i=0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + WEIRD_PRIME + value) % arrayLength;
  }
  return total;
}
