// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Must have O(n) time complexity.

const sameFrequency = (num1, num2) => {
    const obj = {};
    const obj2 = {};
    const num1String = num1.toString();
    const num2String = num2.toString();
    if (num1String.length !== num2String.length) return false;

    for (let i = 0; i < num1String.length; i++) {
        const num = num1String[i];
        obj[num] = ++obj[num] || 1;
    }

    for (let i = 0; i < num2String.length; i++) {
        const num = num2String[i];
        obj2[num] = ++obj2[num] || 1;
    }

    for (let key in obj) {
        if (!obj2[key] || obj2[key] !== obj[key]) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(1821, 281));
