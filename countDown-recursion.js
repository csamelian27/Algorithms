// recursively
function countDown(num) {
  // base case
  if (num <= 0) {
    console.log("All done!");
    // have to have the return to stop the function
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}



// iteratively
function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}
