// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution must have O(n) time complexity

// My Solution:
function sameFrequency(numOne, numTwo) {
    if(numOne.length !== numTwo.length) return false;
    let num1 = numOne.toString();
    let num2 = numTwo.toString();
    let counter1 = {};
    let counter2 = {};

    for(let i=0; i < num1.length; i++) {
        counter1[num1[i]] ? counter1[num1[i]] += 1 : counter1[num1[i]] = 1;
    }

    for(let i=0; i < num2.length; i++) {
        counter2[num2[i]] ? counter2[num2[i]] += 1 : counter2[num2[i]] = 1;
    }

    for(let num in counter1) {
        if(counter1[num] !== counter2[num]) {
            return false;
        }
    }
    return true;
}


// Lizzy Solution:
function sameFrequency(one, two){
    let keyObj = {}
    let arr1 = one.toString()
    let arr2 = two.toString()

    if(arr1.length !== arr2.length){
        return false
    }

    for(let i = 0; i < arr1.length; i++){
       let num = arr1[i]
       keyObj[num] = (keyObj[num] || 0) + 1
    }

    for(let i = 0; i < arr2.length; i++){
        if(keyObj[arr2[i]]){
            keyObj[arr2[i]] --
        } else {
            return false
        }
        return true
    }
}

sameFrequency(182,281)
sameFrequency(34,14)


// Colt Steele Solution:
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
