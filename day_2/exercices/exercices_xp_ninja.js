// =========> EXERCICE 1
const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

let sumHumanYears = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].type === 'dog') {
    sumHumanYears += data[i].age * 7;
  }
}
console.log("Sum of dogs' ages in human years (loop):", sumHumanYears);

const sumHumanYearsReduce = data
  .filter(animal => animal.type === 'dog') // get only dogs
  .reduce((acc, dog) => acc + dog.age * 7, 0);

console.log("Sum of dogs' ages in human years (reduce):", sumHumanYearsReduce);


// =========> EXERCICE 2

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';

const cleanedEmail = userEmail3.trim();

console.log(cleanedEmail);

// =========> EXERCICE 3

const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

const usersObject = {};

users.forEach(user => {
  const fullName = `${user.firstName} ${user.lastName}`;
  usersObject[fullName] = user.role;
});

console.log(usersObject);

// =========> EXERCICE 4

const letters = ['x', 'y', 'z', 'z'];

const countForLoop = {};
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (countForLoop[letter]) {
    countForLoop[letter] += 1;
  } else {
    countForLoop[letter] = 1;
  }
}
console.log(countForLoop);


const countReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(countReduce);
