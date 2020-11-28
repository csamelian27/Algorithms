// Write a function called isSubsequence which takes in two strings and checks whether the
// characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.
// O(n+m) time, O(1) space

// My working solution
const isSubsequence1 = (str1, str2) => {
    let pointerA = 0;

    for (let pointerB = 0; pointerB < str2.length; pointerB++) {
        if (str2[pointerB] === str1[pointerA]) {
            pointerA++;
        }
        if (pointerA === str1.length) {
            return true;
        }
    }
    return false;
};

// recursive solution - not O(1) space
const isSubsequence2 = (str1, str2) => {
    if(str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence2(str1.slice(1), str2.slice(1))
    return isSubsequence2(str1, str2.slice(1))
};

console.log(isSubsequence2('sing', 'stingy'));
