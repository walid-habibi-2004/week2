// ===========> Exercice 1

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});

// output: [2, 4, 6]
// All elements (1, 2, 3) are numbers, so each one is multiplied by 2.
// That’s why the result is [2, 4, 6]

// ===========> Exercice 2

const arr = [[0, 1], [2, 3]];

const result = arr.reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2] // initial value of the accumulator
);

console.log(result);
// Output: [1, 2, 0, 1, 2, 3]

// ===========> Exercice 3

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

// i represents the position of each number inside the array.

// ===========> Exercice 4
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const flattenedArray = array.flat(2);
console.log(flattenedArray); 

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const greetingStrings = greeting.map(arr => arr.join(" "));
console.log(greetingStrings);

const greetingSentence = greetingStrings.join(" ");
console.log(greetingSentence);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const singleNumberArray = trapped.flat(Infinity);
console.log(singleNumberArray);
