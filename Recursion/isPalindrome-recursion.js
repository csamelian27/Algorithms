// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it returns false.

// My solution!
function isPalindrome(str) {
  if(str[0] !== str[str.length-1]) return false;

  function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
  }

  if(reverse(str) === str) return true;
  return false;
}



// Lizzy Solution!
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(word){
    if (word[0] !== word[word.length -1]) return false

    function reverse (word){
        if(word.length <= 1) return word
        return reverse(word.slice(1)) + word[0]
    }

    if (reverse(word) === word) {
        return true
    } else {
        return false
    }
}



// Colt Solution
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
