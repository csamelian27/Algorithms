// Write a function that takes in an array of at least 3 integers and, without sorting the input array,
// Returns a sorted array of the three largest integers in the input array.
// It returns duplicates, if necessary. i.e. returns [10,10,12] for [10,5,9,10,12] 

function findThreeLargestNumbers(array) {
    const sortedArray = [];

    for (let i = 0; i < array.length; i++) {
        const a = array[i];
        const b = array[i+1];
        if (a > b) {
            sortedArray.push()
        }
    }

    return array;
}

// const array = [141, 541, 8, 7, 7];
const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

console.log(findThreeLargestNumbers(array))
