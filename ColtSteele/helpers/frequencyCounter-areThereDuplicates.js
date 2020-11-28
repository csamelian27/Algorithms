// Frequency Counter/Multiple Pointers
// Implement a function called, areThereDuplicates, that accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// frequencyCounter
const areThereDuplicates1 = (...args) => {
    const obj = {};

    for (let i = 0; i < args.length; i++) {
        const element = args[i].toString();

        if (!obj[element]) {
            obj[element] = 1;
        } else {
            return true;
        }
    }
    return false;
};

// multiplePointers
const areThereDuplicates2 = (...args) => {
    if (args.length <= 1) return false;
    const sorted = args.sort();
    let pointerA = 0;

    for (let pointerB = 1; pointerB < sorted.length; pointerB++) {
        if (sorted[pointerA] === sorted[pointerB]) {
            return true;
        }
        pointerA++;
    }
    return false;
};

// one liner
const areThereDuplicates3 = (...args) => {
    return new Set(args).size !== args.length;
};

console.log(areThereDuplicates3(1,2,4,7,9,11,22));
