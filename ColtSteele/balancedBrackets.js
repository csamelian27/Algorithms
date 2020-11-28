// iterate through input
// if the current element is an opening bracket, record the correct closing bracket
// if the current element is a closing bracket, check the recors to make sure it is the correct closing bracket
// if all the opening and closing brackets are matched and in the correct order, return true, otherwise return false

// Using a stack data structure - preserves order of brackets
const isBalanced = (input) => {
    let brackets = "[]{}()<>";
    let stack = [];

    for (let bracket of input) {
        let bracketsIndex = brackets.indexOf(bracket);

        // accounts for non bracket chars so it doesn't break
        if (bracketsIndex === -1) continue;

        // pushing index of closing bracket to stack
        if (bracketsIndex % 2 === 0) stack.push(bracketsIndex + 1);
        else {
            // pop off last index we added and it should match the bracketsIndex
            if (stack.pop() !== bracketsIndex) return false;
        }
    }

    // should be no opening brackets left at the end, if there are, not balanced
    return stack.length === 0;
}

console.log(isBalanced('(){}[{[)(]}]'));

// invalid - doesn't check for balance, just matching
const isBalanced2 = (str) => {
    return !str.split('').reduce((upToPrevChar, thisChar) => {
        if (thisChar === '(' || thisChar === '{' || thisChar === '[') {
            return ++upToPrevChar;
        } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
            return --upToPrevChar;
        }

        return upToPrevChar;
    }, 0);
}

// ES6 - also invalid doy
function isBalanced3([...str]) {
    return str.reduce((uptoPrevChar, thisChar) => {
        ((thisChar === '(' && uptoPrevChar++ || thisChar === ')' && uptoPrevChar--)) &&
            ((thisChar === '{' && uptoPrevChar++ || thisChar === '}' && uptoPrevChar--)) &&
            ((thisChar === '[' && uptoPrevChar++ || thisChar === ']' && uptoPrevChar--));

        return uptoPrevChar;
    }, 0) === 0
}

