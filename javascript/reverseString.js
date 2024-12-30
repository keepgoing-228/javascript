function reverseString(string) {
  let arr = string.split("");
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr.join("");
}

console.log(reverseString("abcdefg"));
