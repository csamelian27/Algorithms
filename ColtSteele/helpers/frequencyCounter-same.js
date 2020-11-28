// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The function shouldThe frequency of values must be the same.
// Naive solution with nested loops - O(n^2)
const same1 = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true; 
}

// Refactored
const same2 = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(same2([4,1,2,6,4],[37,1,4,16,16]));
