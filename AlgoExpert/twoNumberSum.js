// closing window technique
const twoNumberSum = (array, targetSum) => {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let a = array[left];
        let b = array[right];

        if ((a + b) === targetSum) {
            return [a, b];
        } else if ((a + b) > targetSum) {
            right--;
        } else if ((a + b) < targetSum) {
            left++;
        }
    }

    return [];
}

// const sortedArray = [-4, -1, 1, 3, 5, 6, 8, 11];

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetSum = 17;

console.log(twoNumberSum(array, targetSum));
