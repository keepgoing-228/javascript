console.log(star(5));

function star(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    if (i < n) {
      console.log("*".repeat(i + 1));
    } else {
      console.log("*".repeat(2 * n - i - 1));
    }
  }
}
