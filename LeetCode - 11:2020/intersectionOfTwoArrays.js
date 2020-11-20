// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2, 2]

// Example 2:
// Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [4, 9]
// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

// Follow up:
// What if the given array is already sorted ? How would you optimize your algorithm ?
// What if nums1's size is small compared to nums2's size ? Which algorithm is better ?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once ?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    if (nums1 == null || nums2 == null || nums1.length == 0 || nums2.length == 0) {
        return [];
    }

    nums1.sort();
    nums2.sort();
    let i = 0;
    let j = 0;
    const result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};

console.log
    (intersect(
        [61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81],
        [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48]
    )
    );
