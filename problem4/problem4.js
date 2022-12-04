function meanMedian(arrayInput) {
  // Your Code Here

  // let mean
  let total = 0;
  for (let i = 0; i < arrayInput.length; i++) {
    total += arrayInput[i];
  }
  mean = total / arrayInput.length;

  // let median atau nilai tengah
  let Median = 0;
  number = arrayInput.length;

  if (number % 2 === 0) {
    Median = (arrayInput[number / 2] + arrayInput[number / 2 - 1]) / 2;
  } else {
    Median = arrayInput[(number - 1) / 2];
  }
  return String(mean) + " " + String(Median);
}

console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30
