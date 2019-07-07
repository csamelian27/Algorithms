// Write a recursive function called reverse which accepts a string and returns a new string in reverse

// My solution!
function reverse(str) {
  if(str.length <= 1) return str;
  str = reverse(str.slice(1)) + str[0];
  return str;
}

function reverse(str) {
  if(str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

reverse("butt") // "ttub"
reverse("") // ""
reverse("h") // "h"

// reverse('utt') + b
// reverse("tt") + u
// reverse('t') + t
// reverse('') + t


// Lizzy solution
function reverse(string){
  // add whatever parameters you deem necessary - good luck!

  if (string.length <= 1) return string

  return reverse(string.slice(1)) + string[0]
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
