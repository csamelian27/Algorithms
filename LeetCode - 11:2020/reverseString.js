// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.
// You may assume all the characters consist of printable ascii characters.

// Example 1:
// Input: ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]

// Example 2:
// Input: ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]

const reverseString = (arrOfChars) => {
    let length = arrOfChars.length;
    for (let i = 0; i < length / 2; i++) {
        let temp = arrOfChars[i];
        arrOfChars[i] = arrOfChars[length - 1 - i];
        arrOfChars[length - 1 - i] = temp;
    }

    return arrOfChars;
    // let leftPointer = 0;
    // let rightPointer = arrOfChars.length - 1;

    // while (leftPointer < rightPointer) {
    //     let left = arrOfChars[leftPointer];
    //     arrOfChars[leftPointer++] = arrOfChars[rightPointer];
    //     arrOfChars[rightPointer--] = left;
    // }
    
    // return arrOfChars;
}
//                        ["o", "l", "l", "e", "h"]
//                        ["e", "o", "l", "h", "l"] 
console.log(reverseString(["h", "e", "l", "l", "o"]));




// while (i < arrOfChars.length) {
//     let char = arrOfChars.shift();
//     arrOfChars.splice(arrOfChars.length - i, 0, char)
//     i++;
//     return reverseString(arrOfChars, i);
// }
// return arrOfChars;
