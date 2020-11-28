function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// countDown(5);

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1)
}

// console.log(sumRange(5));
// each iteration waits for the return value from the iteration before it, like how the call stack works, so then you add up the return values of every iteration

// 4!
const factorial = (num) => {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

// console.log(factorial(4));

// Helper method recursion - for collecting an array of data
const collectOddValues1 = (arr) => {
    const odds = [];

    const helper = (helperInput) => {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            odds.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);
    return odds;
}

// Pure recursion
const collectOddValues2 = (arr) => {
    // gets reset every time
    let odds = [];

    if (arr.length === 0) {
        return odds;
    }

    if (arr[0] % 2 !== 0) {
        odds.push(arr[0]);
    }

    // concat the results from each iteration
    odds = odds.concat(collectOddValues2(arr.slice(1)));
    return odds;
}

// console.log(collectOddValues2([2,3,4,5,6,7,8,9,11,25]));

// Depth first recursive w/ helper method recursion
const depthFirstRecursive = (start) => {
    const result = [];
    const visited = {};
    const adjancencyList = this.adjancencyList;

    (function dfs(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjancencyList[vertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                return dfs(neighbor);
            }
        });
    })(start);

    return result;
}

// should return the power of the base to the exponent
const power = (base, exp) => {
    if (exp <= 0) return 1;
    return base * power(base, exp - 1);
};

// console.log(power(2, 2));

const productOfArray = (arr) => {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
};

//                         []
//                         [3]
//                         [2,3]
// console.log(productOfArray([1,2,3,4]));

function recursiveRange(num) {
    if (num === 1) return 1;
    return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(10));

// 1, 1, 2, 3, 5
function fib1(num) {
    if (num <= 2) return 1;
    return fib1(num - 1) + fib1(num - 2);
}

// with memoization
function fib2(num) {
    let memo = {};
    if (num < 0) return 'invalid input';
    if (num <= 2) return 1;

    if (memo[num]) {
        return memo[num];
    }

    let result = fib2(num - 1) + fib2(num - 2);
    memo[num] = result;
    return result;
}

//         2
//          + 1 = 3
console.log(fib2(10));

// iterative
function reverse1(str) {
    let reversedWord = []
    for (let i = str.length; i >= 0; i--) {
        reversedWord.push(str[i]);
    }
    return reversedWord.join("");
}

// recursive
function reverse2(str) {
    if (str.length < 2) return str;
    return reverse2(str.slice(1)) + str[0];
}

//                   'e' + m      // e
//                   'me' + o     // em
//                   'ome' + s    // emo
//                   'some' + e   // emos
//                   'esome' + w  // emose
//                   'wesome' + a // emosew
// console.log(reverse2('awesome')); // emosewa


function isPalindrome(str) {
    // const helper = (input) => {
    //     if (input.length < 2) return input;
    //     return helper(input.slice(1)) + input[0];
    // }
    // let reversed = helper(str);
    // return reversed === str;

    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}

// console.log(isPalindrome('tacocat'));

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// accepts arr and callback, returns true if any one element of the arr matches the callback
function someRecursive(arr, parameter) {
    if (arr.length < 1) return false;
    if (parameter(arr[0])) return true;
    return someRecursive(arr.slice(1), parameter);
}

// console.log(someRecursive([2,4,6,9], isOdd));

// accepts array of arrays and returns a new array of flattened values
function flatten(oldArr) {
    let newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}

// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// capitalize first letter of each string in array
function capitalizeFirst(arr) {
    let newArr = [];
    if (arr.length < 1) return arr;
    newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    return newArr.concat(capitalizeFirst(arr.slice(1)));
}

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

function capitalizeWords(arr) {
    let newArr = [];
    if (arr.length < 1) return arr;
    newArr.push(arr[0].toUpperCase());
    return newArr.concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words));

// Accepts obj and returns an array of all the values in the obj that have typeof string
const collectStrings = (nested) => {
    let newArr = [];
    for (let key in nested) {
        let currValue = nested[key];
        if (typeof currValue === 'string') {
            newArr.push(currValue);
        } else if (typeof currValue === 'object') {
            return newArr.concat(collectStrings(currValue));
        }
    }
    return newArr;
};

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
