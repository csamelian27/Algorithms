// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Note:
// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let zeroCounter = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        console.log('element', element);
        if (element === 0) {
            nums.splice(i, 1);
            zeroCounter += 1;
            i--;
        }
    }
    while (zeroCounter > 0) {
        zeroCounter -= 1;
        nums.push(0);
    }

    return nums;
};

console.log('moveZeroes:', moveZeroes([0, 0, 1, 0, 2, 12, 0, 3]));

