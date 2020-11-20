// Given a non - empty array of decimal digits representing a non - negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list,
// and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: digits = [1, 2, 3]
// Output: [1, 2, 4]
// Explanation: The array represents the integer 123.

// Example 2:
// Input: digits = [4, 3, 2, 1]
// Output: [4, 3, 2, 2]
// Explanation: The array represents the integer 4321.

// Example 3:
// Input: digits = [0]
// Output: [1]

// Constraints:
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    // found solution that's sexy
    for (let i = digits.length - 1; i >= 0; i--) {
        // the ++ increments the digit then compares
        if (++digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    digits.unshift(1);
    return digits;
};

// const digitsString = digits.join('');
// if (digits.length === 1) {
//     return digits[0] === 9 ? [1, 0] : [integerDigits + 1];
// } else if (digits.length > 16) {
//     const lastDigit = parseInt(digits[digits.length - 1]);
//     if (lastDigit === 9) {
//         const secondToLastDigit = parseInt(digits[digits.length-2]);
//         digits[digits.length-2] = secondToLastDigit + 1;
//         digits[digits.length-1] = 0;
//         return digits;
//     }
//     digits[digits.length - 1] = lastDigit + 1;
//     return digits;
// }
// let integerDigits = parseInt(digitsString);
// console.log('int', integerDigits);
// const integerDigitsIncreased = (integerDigits + 1).toString();
// const increasedArray = integerDigitsIncreased.split('');
// if (digits[0] === 0 && integerDigitsIncreased !== '10') {
//     increasedArray.unshift(0);
// }
// return increasedArray;
console.log('plusOne:', plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 2, 3]));

// let newDigits = [];

// for (let i = 0; i < digits.length; i++) {
//     const element = digits[i];

//     if (digits.length === 1) {
//         return element === 9 ? [1, 0] : [element + 1];
//     }

//     if (i !== digits.length - 1) {
//         if (element === 9) {
//             const lastDigit = newDigits.pop();
//             newDigits.push(lastDigit + 1);
//             newDigits.push(0);
//         } else {
//             newDigits.push(element);
//         };
//     } else {
//         if (element === 9) {
//             const lastDigit = newDigits.pop();
//             newDigits.push(lastDigit + 1);
//             newDigits.push(0);
//         } else {
//             newDigits.push(element + 1);
//         };
//     }
// }

// return newDigits;
