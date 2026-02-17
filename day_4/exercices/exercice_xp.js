// =========> Exercice 1
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Simple Form</title>
// </head>
// <body>

//     <h2>Contact Form</h2>

//     <form method="GET" action="">
//         <label for="name">Name:</label><br>
//         <input type="text" id="name" name="name"><br><br>

//         <label for="message">Message:</label><br>
//         <textarea id="message" name="message" rows="5" cols="30"></textarea><br><br>

//         <input type="submit" value="Send">
//     </form>

// </body>
// </html>

// When you click the Send button with the GET method,
// the form data appears in the URL (address bar)
// as query parameters, for example:
// form.html?name=Walid&message=Hello

// The sent data will appear in the URL (address bar) 
// after the form is submitted using the GET method.

// =========> Exercice 2


// When you click the Send button with the POST method,
// the form data does NOT appear in the URL.
// Instead, it is sent in the request body.
// You can see the sent data in the browser's Developer Tools
// under the Network tab by inspecting the form submission request.


// =========> Exercice 3

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>JSON Mario Game</title>
// </head>

// <body>

//     <h2>Mario Game JSON</h2>
//     <button id="showJSON">Show Pretty JSON</button>

//     <pre id="jsonOutput"></pre>

//     <script src="exercice_xp.js"></script>
// </body>

// </html>

const marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
};

function displayJSON() {
    const prettyJSON = JSON.stringify(marioGame, null, 2);

    debugger;

    document.getElementById("jsonOutput").textContent = prettyJSON;
}

document.getElementById("showJSON").addEventListener("click", displayJSON);
