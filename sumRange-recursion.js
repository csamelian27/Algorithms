function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num-1);
}

// Base case:
// num === 1

// Different inputs:
// sumRange(3)
// num = 3; num = 2; num = 1 & ends; 3 + 2 + 1 = 6!

// What would happen if we didn't return?
// It would go into negatives & never end, hence why we need a base case and a return
