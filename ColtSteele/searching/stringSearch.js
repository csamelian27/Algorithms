// - Loop over the longer string
// - Loop over the shorter string
// - If the characters don't match, break out of the inner loop
// - If the characters match, keep going
// - If you complete the inner loop and find a match, increment the count of matches
// - Return the count

// naive implementation
const stringSearch = (longerString, substring) => {
    let matches = 0;

    for (let i = 0; i < longerString.length; i++) {
        for (let j = 0; j < substring.length; j++) {
            if (longerString[i + j] !== substring[j]) break;
            else if (j === substring.length - 1) matches++;
        }
    }

    return matches;
}

console.log(stringSearch('wowomgzomg', 'omg'));
