primeNumbers = (num) => {
  let primes = []
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }
  return primes
}

isPrime = (num) => {
  for (let x = 2; x < num; x++) {
    if (num % x === 0) {
      return false
    }
  }
  return true
}

console.log(primeNumbers(19));
