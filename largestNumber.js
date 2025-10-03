const numbers = [10, 5, 20, 15, 30];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}
console.log(largestNumber);
