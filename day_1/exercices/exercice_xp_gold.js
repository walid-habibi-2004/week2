// ===== Exercise 1
//1 - flat(4)

// The flat function adds _ x times.
// x = 4 → adds "____"
// result = "____"

//2 - mountain(4)
// Adds / → result = "____/"
// Adds ' x times → 4 ' → result = "____/''''"
// Adds \ → result = "____/''''\"

//3 - flat(4) again
// Adds 4 underscores → result = "____/''''\____

let landscape = () => {
    let result = "";

    let flat = (x) => {
        for (let count = 0; count < x; count++) {
            result += "_";
        }
    }

    let mountain = (x) => {
        result += "/";
        for (let counter = 0; counter < x; counter++) {
            result += "'";
        }
        result += "\\";
    }

    flat(4);
    mountain(4);
    flat(4);

    return result;
}

landscape();

// ===== Exercise 2

const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);

// 1 - addTo = x => y => x + y
// this function take x and return new function the new take y ana return x + y
// 2 - addToTen = addTo(10)
// x = 10 so addToTen becomes a function take y and return y + 10
// 3 - addToTen(3)
// y = 3 , 3 + 10 = 13
// So the result is 13

// ===== Exercise 3
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// this function take a and return new function the new take b and return a + b
// curriedSum(30) a = 30 ---> 30 + b
// curriedSum(30)(1) b = 1 ---> 30  + 1
// So the result is 31

// ===== Exercise 4

const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

// curriedSum(5) return new fonction his take 5 + b
// add5(12) take 12 → return 5 + 12 = 17
// This is how you create a mini-function that remembers a fixed number (5) and adds any number you give it.


// ===== Exercise 5

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// compose(add1, add5) create a new fonction his make : add1(add5(a))
// right now a = 10 → add5(10) = 15 → add1(15) = 16
// So final output = 16
