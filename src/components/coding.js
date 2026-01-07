// const numbers = [45, 4, 9, 16, 25, 100, 43];

// Find the largest number
// const largest = numbers.reduce(
//   (max, current) => (current > max ? current : max),
//   -Infinity
// );

// Find the smallest number
// const smallest = numbers.reduce(
//   (min, current) => (current < min ? current : min),
//   Infinity
// );

// console.log("Largest:", largest);
// console.log("Smallest:", smallest);
// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const data = arrayWithDuplicates.filter((item, index) => {
//   return arrayWithDuplicates.indexOf(item) === index;
// });
// console.log(data);
// let a = ["a", "c", "K"];
// console.log(a.sort());
// function fibonacciSeries(n) {
//   const fib = [0, 1]; // Start with the first two numbers
//   for (let i = 2; i < n; i++) {
//     // The next number is the sum of the two preceding ones
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib; // Return the series up to n terms
// }

// console.log(fibonacciSeries(10));
// // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// let rabbit = {
//   rabbitJumps: true,
// };
// let animal = {
//   animalEats: true,
// };
// Object.setPrototypeOf(rabbit, animal);
// console.log(rabbit);
// console.log(rabbit.animalEats);
// console.log(animal.rabbitJumps);
/**
 * @param {string} numchars
 * @returns {string}
 */
function DetectNumbersfromJumbledCharacters(numchars) {
  let num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let res = "";
  let arr = numchars.split();
  for (let i = 0; i < 10; i++) {
    let cont = 0;
    for (let char of num[i]) {
      if (arr.includes(char)) {
        let temp = arr.indexOf(char);
        arr.splice(temp, 1);
        cont++;
      }
    }
    if (cont === num[i].length) {
      res += i;
    }
  }
  return res;
}

console.log(DetectNumbersfromJumbledCharacters("niesevehrtfeev"));
