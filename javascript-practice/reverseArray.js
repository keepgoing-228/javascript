const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];

// with new array
// const reversed_friends = [];

// for (let i = friends.length - 1; i >= 0; i--) {
//   reversed_friends.push(friends[i]);
// }
// console.log(reversed_friends);

// for (let i = 0; i < friends.length; i++) {
//   reversed_friends.push(friends[friends.length - 1 - i]);
// }

for (let i = 0; i < friends.length / 2; i++) {
  let temp = friends[i];
  friends[i] = friends[friends.length - 1 - i];
  friends[friends.length - 1 - i] = temp;
}

console.log(friends);
console.log(friends.length / 2);
