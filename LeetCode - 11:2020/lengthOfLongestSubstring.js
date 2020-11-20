// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:
// Input: s = ""
// Output: 0

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// Some dude's solution
const lengthOfLongestSubstring = (str) => {
    let maxLength = 0;
    let counter = 0;
    let obj = {};

    if (str.length < 2) {
        return str.length;
    }

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === null) {
            counter += 1;
        } else {
            counter = Math.min(i - obj[str[i]], counter + 1);
        }

        maxLength = Math.max(maxLength, counter);
        obj[str[i]] = i; //save the index
    }
    return maxLength;
};

const response = lengthOfLongestSubstring('aa');
console.log('response', response);


// My failed but almost there solution:
// const substrings = [];
// let substring = '';

// if (!str.length) {
//     return 0;
// } else if (str.length === 1) {
//     return 1;
// }

// for (let i = 1; i < str.length; i++) {
//     const character = str[i];
//     const foundCharacter = substring.split('').find((char) => char === character);

//     if (!foundCharacter) {
//         substring += character;
//         console.log('substring', substring);
//     } else {
//         console.log('found it', substring);
//         substrings.push(substring);
//         substring = character;
//     }
// }

// console.log('substrings', substrings);
// const sorted = substrings.sort((a, b) => b.length - a.length);
// console.log('sorted', sorted);
// const longestSubstring = sorted[0] ? sorted[0].length : 0;
// return longestSubstring;