// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? 
// Find all unique triplets in the array which gives the sum of zero.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []

// Constraints:
// 0 <= nums.length <= 3000
// -10^5 <= nums[i] <= 10^5

// /**
//  * 
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// const threeSum = (nums) => {
//     const triplets = [];
//     let aCounter = 0;
//     let bCounter = 1;
//     let cCounter = 2;

//     while (nums.length > 0 && aCounter <= nums.length - 3) {
//         const a = nums[aCounter];
//         const b = nums[bCounter];
//         const c = nums[cCounter];

//         if (a + b + c === 0) {
//             const sorted = [a, b, c].sort();
//             const found = triplets.find((trip) => {
//                 trip.sort();
//                 return trip[0] === sorted[0] && trip[1] === sorted[1] && trip[2] === sorted[2];
//             });
//             if (!found) triplets.push([a, b, c]);
//             cCounter++;
//             continue;
//         };
//         if (cCounter === nums.length - 1 && bCounter === aCounter + 1) {
//             aCounter++;
//             bCounter = aCounter + 1;
//             cCounter = aCounter + 2;
//         } else {
//             bCounter++;
//             cCounter++;
//         };
//     };

//     return triplets;
// };

// Never solved - found below solution but don't like - above solution passes 61 of 333 cases
const threeSum = (nums) => {
    // nums = nums.sort();

    // let uniqueTriplets = [];
    // let a, b, c;
    // let numsLength = nums.length;

    // for (a = 0; a < numsLength; a++) {
    //     if (a > 0 && nums[a] === nums[a - 1]) continue;

    //     for (b = a + 1; b < numsLength; b++) {
    //         if (b > a + 1 && nums[b] === nums[b - 1]) continue;

    //         for (c = b + 1; c < numsLength; c++) {
    //             if (c > b + 1 && nums[c] === nums[c - 1]) continue;

    //             if ((nums[a] + nums[b] + nums[c]) === 0) {
    //                 uniqueTriplets.push([nums[a], nums[b], nums[c]]);
    //             }
    //         }
    //     }
    // }
    // return uniqueTriplets;
}

const array = threeSum([-2,0,1,1,2]);
console.log('array', array);