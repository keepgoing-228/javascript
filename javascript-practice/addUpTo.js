function addUpTo(n) {
  // O(n)
  // let sum = 0;
  // for (let i = 1; i <= n; i++) {
  //   sum += i;
  // }
  // return sum;

  // O(1)
  return (n * (n + 1)) / 2;
}

// console.log(addUpTo(15));
let startTime = performance.now();
console.log(addUpTo(100504200));
let endTime = performance.now();
console.log(endTime - startTime);
