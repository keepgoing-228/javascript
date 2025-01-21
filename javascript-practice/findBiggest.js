array = [2, 4, 64, 18, 10, 152, 14, 416, 18, 20];
console.log(findBiggest(array));

function findBiggest(arr) {
  if (arr.length === 0) {
    return "undefined";
  } else {
    let biggestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > biggestNumber) {
        biggestNumber = arr[i];
      }
    }
    return biggestNumber;
  }
}
