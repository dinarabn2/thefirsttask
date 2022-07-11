function showPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
      if (num % i === 0) {
        return false;
      }    
    }
    return num > 1;
  }

function getPrimesFor(num) {
    const primes = [];
    
    for (let i = 2; i <= num; i++) {
      if (showPrime(i)) {
        primes.push(i);
      }
    }
    
    return primes.join(', ');
}
  
  console.log(getPrimesFor(20));