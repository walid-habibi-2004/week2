// ===== Exercise 1
// #1
function funcOne() {
    let a = 5;
    if (a > 1) a = 3;
    alert(a); // 3
}

// #1.2 - With const, would throw error if reassigned

// #2
let a = 0;
function funcTwo() {
    a = 5;
}
function funcThree() {
    alert(a);
}
// Console run: funcThree() -> 0, funcTwo(), funcThree() -> 5
// With const, funcTwo() would throw error

// #3
function funcFour() {
    window.a = "hello";
}
function funcFive() {
    alert(a); // "hello"
}

// #4
let a4 = 1;
function funcSix() {
    let a = "test";
    alert(a); // "test"
}
// With const instead of let: works same

// #5
let a5 = 2;
if (true) {
    let a = 5;
    alert(a); // 5
}
alert(a5); // 2
// With const instead of let: same behavior


// ===== Exercise 2
const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// ===== Exercise 3
const isString = (value) => typeof value === 'string';

console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));
// ===== Exercise 4

const sum = (a, b) => a + b;

console.log(sum(5, 3));
console.log(sum(10, 20));

// ===== Exercise 5

function kgToGram1(kg) {
    return kg * 1000
}
console.log(kgToGram1(5));

const kgToGram2 = function (kg) {
    return kg * 1000
}
console.log(kgToGram2(7))


// 3 - Difference between function declaration and expression:
// Function declarations are hoisted, function expressions are not.

const kgToGram3 = kg => kg * 1000
console.log(kgToGram3(2))

    // ===== Exercise 6

    (function (numChildren, partnerName, geoLocation, job) {
        const info = `You will be a ${job} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
        document.getElementById('id').innerText = info
    })(0, "ouma", "casablanca", "Web Developer")

    // ===== Exercise 7

    // html exercice 7
    // <!DOCTYPE html>
    // <html lang="en">

    // <head>
    //     <meta charset="UTF-8">
    //     <title>Navbar Welcome</title>
    //     <style>
    //         nav {
    //             display: flex;
    //             justify-content: flex-end;
    //             align-items: center;
    //             background-color: #333;
    //             padding: 10px 20px;
    //             color: white;
    //             font-family: Arial, sans-serif;
    //         }

    //         .user-info {
    //             display: flex;
    //             align-items: center;
    //             gap: 10px;
    //             background-color: #444;
    //             padding: 5px 10px;
    //             border-radius: 5px;
    //         }

    //         .user-info img {
    //             width: 40px;
    //             height: 40px;
    //             border-radius: 50%;
    //         }
    //     </style>
    // </head>

    // <body>
    //     <nav id="navbar">
    //         <h1>My Website</h1>
    //     </nav>

    //     <script src="exercises_xp.js"></script>
    // </body>

    // </html>

    (function (userName) {
        const navBar = document.getElementById("navbar")
        const userDiv = document.createElement('div')
        userDiv.className = "user-info"

        const profile = document.createElement('img')
        profile.src = 'https://via.placeholder.com/40'


        const nameSpan = document.createElement('span')
        nameSpan.innerText = userName

        userDiv.appendChild(profile)
        userDiv.appendChild(nameSpan)

        navBar.appendChild(userDiv)

    })('walid')


// ===== Exercise 8
// html exercice 8
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Juice Bar Complete</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       padding: 20px;
//     }
//     #order {
//       margin-top: 20px;
//       font-size: 18px;
//       color: #333;
//     }
//   </style>
// </head>
// <body>
//   <h1>Welcome to the Juice Bar!</h1>
//   <div id="order"></div>

//   <script src="exercises_xp.js"></script>
// </body>
// </html>


function makeJuice(size) {
    let ingredients = []

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3)
    }

    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        document.getElementById('order').textContent = message;
    }


    addIngredients('apple', 'banana', 'carrot');
    addIngredients('orange', 'strawberry', 'mango');

    displayJuice();
}

makeJuice('large');
