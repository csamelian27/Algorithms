// Given 2 non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array.
// For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4].
// Note that a single number in an array and the array itself are both valid subsequences of the array.

// Sample Input
const array = [5,1,22,25,6,-1,8,10,8];
const sequence = [1,6,-1,10,8];
// Sample Output
// true

const isValidSubsequence = (array, sequence) => {
    if (!sequence.length || sequence.length > array.length) return false;

    let sequencePointer = 0;
    let arrayPointer = 0;

    while (arrayPointer < array.length && sequencePointer < sequence.length) {
        if (array[arrayPointer] === sequence[sequencePointer]) {
            sequencePointer++;
        }
        arrayPointer++;
    }
    return sequencePointer === sequence.length;
};

console.log(isValidSubsequence(array, sequence));

// Time O(n) & Space O(1)
