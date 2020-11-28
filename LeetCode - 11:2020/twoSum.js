// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Example 3:
// Input: nums = [3, 3], target = 6
// Output: [0, 1]

// Constraints:
// 2 <= nums.length <= 103
// - 109 <= nums[i] <= 109
// - 109 <= target <= 109
// Only one valid answer exists.

const twoSum = (arr, targetSum) => {
    if (arr.length < 2) return null;

    let sampleArray = [...arr];
    let sortedArray = sampleArray.sort((a, b) => a - b);

    let pointerA = 0;
    let pointerB = arr.length - 1;

    while (pointerA < pointerB) {
        let currentSum = sortedArray[pointerA] + sortedArray[pointerB];
        console.log(sortedArray);


        if (currentSum === targetSum) {
            let indexA = arr.indexOf(sortedArray[pointerA]);
            let indexB = arr.indexOf(sortedArray[pointerB]);

            if (indexA !== indexB) {
                return [indexA, indexB];
            } else {
                arr[indexA] = 'used';
                indexB = arr.indexOf(sortedArray[pointerB]);
                return [indexA, indexB];
            }
        } else if (currentSum > targetSum) {
            pointerB--;
        } else {
            pointerA++;
        }
    }
};

console.log(twoSum([2, 5, 5, 11], 10));

// let hash = {};
// for (let i = 0; i < arr.length; i++) {
//     let currNum = arr[i];
//     console.log(arr[i], i);
//     if (i === 0) {
//         hash[currNum] = 0;
//     } else if (!hash[currNum] && hash[currNum] !== 0) {
//         hash[currNum] = i;
//     } else {
//         if (hash.hasOwnProperty(targetSum - currNum)) {
//             return [hash[targetSum - currNum], i];
//         }
//     }
//     if (hash.hasOwnProperty(targetSum - currNum) && i !== 0) {
//         let num = targetSum - currNum;
//         return ([hash[num], hash[currNum]]);
//     }
// }
