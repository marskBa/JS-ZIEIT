// 1
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// 2
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 3
function sumSequence(n) {
  let sum = 0;
  if (n >= 1) {
    for (let i = 1; i <= n; i++) sum += i;
  } else {
    for (let i = n; i <= 1; i++) sum += i;
  }
  return sum;
}
