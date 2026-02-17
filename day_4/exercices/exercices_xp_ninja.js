// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>Form to JSON</title>
// </head>

// <body>

//     <h2>Form Example</h2>

//     <form id="myForm">
//         <input type="text" id="name" placeholder="Name">
//         <input type="text" id="lastname" placeholder="Last Name">
//         <input type="submit" value="Send">
//     </form>

//     <pre id="output"></pre>

//     <script src="exercices_xp_ninja.js">

//     </script>

// </body>

// </html>

const form = document.getElementById('myForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;

    const data = {
        name: name,
        lastname: lastname
    };

    output.textContent = JSON.stringify(data); // Display JSON in <pre>
});
