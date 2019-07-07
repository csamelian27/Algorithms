charCount(‘aaaa’) // {a:4}
charCount(‘hello’) // {h:1, e:1, l:2, o:1}
charCount(‘my phone number is 128752’)

function charCount(str) {
  //return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
  //must do something once for every character of the string, must create an object to store, must return object
}

function charCount(str) {
  //make object to return at end
  let result = {}
  //loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    //if the char is a  num/letter && is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    //if the char is a num/letter && not in object, add it to object and set value to 1
    } else {
      result[char] = 1;
    }
  }
    //if char is something else (space, period, etc.) don’t do anything
  //return object at end
  return result;
}
//this solution does not account for casing of characters, spaces, !, etc.
//not the best but it's something and interviewer might hint and you'll see your error in the results

function charCount(str) {
  //make object to return at end
  let result = {}
  //loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    //if the char is a  num/letter && is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    //if the char is a num/letter && not in object, add it to object and set value to 1
    } else {
      result[char] = 1;
    }
  }
    //if char is something else (space, period, etc.) don’t do anything
  //return object at end
  return result;
}
//at this point you can ask for suggestions on how best to check if something is alphanumeric

function charCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      };
    }
  }
  return obj;
}
//Complete solution; forof is better aesthetically

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      };
    }
  }
  return obj;
}
//For of is better cause you don't have str[i]

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
//Cleaner! Except not sure how efficient performance of regular expression test is; say I think there's a better way to do this....






function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) && //numeric (0-9)
      !(code > 64 && code < 91) && //upper alpha (A-Z)
      !(code > 96 && code < 123)) { //lower alpha (a-z)
    return false
  }
  return true
}
//Much more efficient than regex (/[a-z0-9]/.test(char)) { }

function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
//Best, very readable, most efficient
