function fib(n) {
  // O(2^n)
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(8));
