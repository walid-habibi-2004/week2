// ========> Exercise 1
//  index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Form #3</title>
// </head>
// <body>

// <h2>Form Example</h2>

// <form id="myForm" action="display.html" method="GET">
//     <label for="name">NAME:</label>
//     <input type="text" id="name" name="name"><br><br>

//     <label for="lastname">LAST NAME:</label>
//     <input type="text" id="lastname" name="lastname"><br><br>

//     <input type="submit" value="Submit">
// </form>

// </body>
// </html>

// display.html


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Display Data</title>
// </head>
// <body>

// <h2>Submitted Data</h2>
// <section id="result"></section>

// <script src="exercice_xp_gold.js"></script>

// </body>
// </html>

const params = new URLSearchParams(window.location.search);

const name = params.get('name') || '';
const lastname = params.get('lastname') || '';

const section = document.getElementById('result');
section.textContent = `Name: ${name}, Last Name: ${lastname}`;
