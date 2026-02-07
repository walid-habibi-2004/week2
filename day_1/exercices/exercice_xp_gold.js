// ========= exercice 1

function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));

function printFullName(objUser) {
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));

// ======== exercice 2

function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    
    const values = keys.map(key => obj[key]);
    
    return [keys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// ========= exercice 3

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter(); // count = 0
counterOne.increment();           // count = 1
counterOne.increment();           // count = 2

const counterTwo = counterOne;    // counterTwo pointe sur le même objet que counterOne
counterTwo.increment();           // count = 3

console.log(counterOne.count);    // 3

// counterOne and counterTwo refer to the same object.
// Every call to increment() increases count by 1 on that same object.
// Therefore, the final value of counterOne.count is 3.