// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
function addUpTo(n) {
    let total = 0;
    for (let i=1; i <= n; i++) {
        total += i;
    }
    return total;
}
// 5n + 2 calculations run every time, n == input
// number of operations is (eventually) bounded by a multiple on n (say, 10n)
// O(n)

console.log(addUpTo(100))


function addUpTo2(n) {
    return n * (n + 1) / 2
}
// always 3 calculations, regardless of input
// constant
// O(1)

console.log(addUpTo2(100))


let t5 = performance.now()
addUpTo(1000000000)
let t6 = performance.now()
console.log(`Time Elapsed: ${(t6-t5) / 1000} seconds.`)

let t3 = performance.now()
addUpTo2(1000000000)
let t4 = performance.now()
console.log(`Time Elapsed: ${(t4-t3) / 1000} seconds.`)
