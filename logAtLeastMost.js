function logAtLeast5(n) {
    for (let i=1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

console.log(logAtLeast5(5))
console.log(logAtLeast5(10))

// goes to 5 or n, whichever is larger
// O(n)
// As n grows, runtime grows


function logAtMost5(n) {
    for (let i=1; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}

console.log(logAtMost5(2))
console.log(logAtMost5(6))

// goes to 5 or n, whichever is smaller
// O(5) === O(1)
// As n grows, runtime doesn't matter because it can't go above 5
