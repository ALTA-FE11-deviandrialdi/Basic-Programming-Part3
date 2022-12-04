function compareString(a, b) {
  let kata = a.length < b.length ? a : b;
  let long = kata == a ? b : a;
  if (long.includes(kata)) {
    return kata;
  }
}

console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA
