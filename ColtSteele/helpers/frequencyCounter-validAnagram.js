// Given two strings, write a function to determine if
// the second string is an anagram of the first. An anagram
// is a word, phrase, or name formed by rearranging the letters
// of another, such as cinema, formed from iceman.

// Joe solution
const validAnagram1 = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort();
    const sortedStr2 = str2.split('').sort();

    for (let key in sortedStr1) {
        if (sortedStr2[key] !== sortedStr1[key]) {
            return false;
        }
    }

    return true;
};

console.log(validAnagram1('icemanis', 'csinemai'));

// Colt solution
const validAnagram2 = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        const letter = str1[i];
        lookup[letter] = ++lookup[letter] || 1;
    }

    for (let i = 0; i < str2.length; i++) {
        console.log('lookup', lookup);
        const letter = str2[i];
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
};

console.log(validAnagram2('iceminis', 'csinemii'));

