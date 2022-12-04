function joinArrayRemoveDuplicate(arrayA, arrayB) {
  // Your Code Here
  arrayJoin = [];
  for (let i = 0; i < arrayA.length; i++) {
    // array bagian pertama
    if (arrayJoin.indexOf(arrayA[i]) === -1) {
      arrayJoin.push(arrayA[i]);
    }
  }
  for (let i = 0; i < arrayB.length; i++) {
    // array bagian kedua
    if (arrayJoin.indexOf(arrayB[i]) === -1) {
      arrayJoin.push(arrayB[i]);
    }
  }
  return arrayJoin; // gabungkan
}

console.log(
  joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])
);
// ["apel", "anggur", "lemon", "leci", "nanas"]

console.log(
  joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"])
);
// ["samsung", "apple", "sony", "xiaomi"]

console.log(
  joinArrayRemoveDuplicate(
    ["football", "basketball"],
    ["basketball", "football"]
  )
);
// ["football", "basketball"]
