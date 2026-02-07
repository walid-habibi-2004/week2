// ===== Exercise 1
const mergeWords = (word) => {
  return (nextWord) =>
    nextWord === undefined
      ? word
      : mergeWords(word + ' ' + nextWord);
};

console.log(mergeWords('Hello')());
console.log(mergeWords('There')('is')('no')('spoon.')());
console.log(mergeWords('JavaScript')('is')('fun!')()); 
