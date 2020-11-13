//Map -Create a new array by doing something with each item in an array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var numbers = [3, 56, 2, 48, 5];
// map() expects a function. Whatever we put into it will determine the outcome
function double(x) {
  return x * 2;
}
let newNumbers = numbers.map(double);

// We could also do this using forEach() as shown below
var newNumbers1 = [];
function double2(x) {
  newNumbers.push(x * 2);
}
numbers.forEach(double2);

// Or it could have been shortened to:
var newNumbers2 = [];
numbers.forEach(function (x) {
  newNumbers2.push(x * 2);
});

// Similarly, map() can be shortened. Map automatically creates new arrays
newNumbers = numbers.map(function (x) {
  return x * 2;
});

console.log(newNumbers);

//----------------------------------------------------------------------------------------
//Filter - Create a new array by keeping the items that return true.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var numbers = [3, 56, 2, 48, 5];

// This provides a condition to the array. If that condition is met, an array is returned as True
newNumbers = numbers.filter(function (num) {
  return num > 10;
});
console.log(newNumbers);

// We could do this with the forEach()
var newNumbers2 = [];
numbers.forEach(function (num) {
  if (num < 10) {
    newNumbers2.push(num);
  }
});

//----------------------------------------------------------------------------------------
//Reduce - Accumulate a value by doing something to each item in an array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
var numbers = [3, 56, 2, 48, 5];
// Suppose you want to add and sum all values in the array. We can do this with forEach()
var newNumber4 = 0;
numbers.forEach(function (currentNumber) {
  newNumber4 += currentNumber;
});

console.log(newNumber4);

// We can also do this with the reduce() function
var newNumber5 = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator " + accumulator);
  console.log("current number " + currentNumber);
  return accumulator + currentNumber;
});
console.log(newNumber5);

//----------------------------------------------------------------------------------------
//Find - find the first item that matches from an array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// The function will stop as soon as it founds the first item that meets the specified rules
const newNumber6 = numbers.find(function (num) {
  return num > 10;
});

console.log(newNumber6);

//----------------------------------------------------------------------------------------
//FindIndex - find the index of the first item that matches.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex
// This works in a similar way to find(), but it returns the index of that item instead

const newNumber7 = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(newNumber7);

//----------------------------------------------------------------------------------------
// Challenge: Truncation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
import emojipedia from "./emojipedia";

// My Attempt
var meaning = [];
emojipedia.map(function (x) {
  console.log(x.meaning.substring(0, 99));
  meaning.push(x.meaning.substring(0, 99));
});

console.log(meaning);

// Official Answer
const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);
