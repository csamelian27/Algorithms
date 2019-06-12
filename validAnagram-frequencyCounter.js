// Given two strings, write a function to determine if the second string is an anagram of the first string.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

// Colt Solution
function validAnagram (first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    if(!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

// My Solution
function validAnagram (str1, str2) {
    let counter1 = {}
    let counter2 = {}

    if(str1.length !== str2.length) {
        return false
    }

    for (let i = 0; i < str1.length; i++) {
        counter1[str1[i]] ? counter1[str1[i]] += 1 : counter1[str1[i]] = 1
    }

    for (let j = 0; j < str2.length; j++) {
        counter2[str2[j]] ? counter2[str2[j]] += 1 : counter2[str2[j]] = 1
    }

    for(let letter in counter1) {
        if(counter1[letter] !== counter2[letter]) {
            return false
        }
    }
    return true
}

// Lizzy solution
function validAnagram(str1, str2){
    let str1count = {}
    let str2count = {}
  // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length){
        return false;
    }
    for(let i = 0; i<str1.length; i++){
        str1count[str1[i]] = (str1count[str1[i]] || 0) + 1
        console.dir(str1count)
    }
    for(let i = 0; i<str2.length; i++){
        str2count[str2[i]] = (str2count[str2[i]] || 0) + 1
        console.dir(str2count)
    }
    for(let n in str1count){
        if(str1count[n] !== str2count[n]){
            return false
        }
    }
    return true
}

validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') //true
