// <!DOCTYPE html>
// <html>

// <head>
//     <title>Simple Quote Generator</title>
// </head>

// <body>

//     <h1>Quote Generator</h1>

//     <button id="generateBtn">Generate Quote</button>

//     <p id="quoteText"></p>
//     <p id="quoteAuthor"></p>
//     <p id="stats"></p>
//     <p id="likes"></p>

//     <button id="charSpaces">Chars with spaces</button>
//     <button id="charNoSpaces">Chars without spaces</button>
//     <button id="wordCount">Word count</button>
//     <button id="likeBtn">Like</button>

//     <h2>Add Quote</h2>
//     <form id="addForm">
//         <input type="text" id="newQuote" placeholder="Quote" required>
//         <input type="text" id="newAuthor" placeholder="Author" required>
//         <button type="submit">Add</button>
//     </form>

//     <h2>Filter by Author</h2>
//     <form id="filterForm">
//         <input type="text" id="filterAuthor" placeholder="Author name" required>
//         <button type="submit">Filter</button>
//     </form>

//     <button id="prevBtn">Previous</button>
//     <button id="nextBtn">Next</button>

//     <script src="exercices_xp_ninja.js"></script>

// </body>

// </html>

let quotes = [
    { id: 0, author: "Albert Einstein", quote: "Imagination is more important than knowledge.", likes: 0 },
    { id: 1, author: "Steve Jobs", quote: "Innovation distinguishes between a leader and a follower.", likes: 0 },
    { id: 2, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 }
];

let currentQuote = null;
let filteredQuotes = [];
let index = 0;

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const stats = document.getElementById("stats");
const likes = document.getElementById("likes");

function displayQuote(q) {
    currentQuote = q;
    quoteText.textContent = q.quote;
    quoteAuthor.textContent = "- " + q.author;
    stats.textContent = "";
    likes.textContent = "Likes: " + q.likes;
}

document.getElementById("generateBtn").onclick = function () {
    let random = Math.floor(Math.random() * quotes.length);
    displayQuote(quotes[random]);
};

document.getElementById("charSpaces").onclick = function () {
    if (currentQuote)
        stats.textContent = currentQuote.quote.length;
};

document.getElementById("charNoSpaces").onclick = function () {
    if (currentQuote)
        stats.textContent = currentQuote.quote.replace(/\s/g, "").length;
};

document.getElementById("wordCount").onclick = function () {
    if (currentQuote)
        stats.textContent = currentQuote.quote.split(" ").length;
};

document.getElementById("likeBtn").onclick = function () {
    if (currentQuote) {
        currentQuote.likes++;
        likes.textContent = "Likes: " + currentQuote.likes;
    }
};

document.getElementById("addForm").onsubmit = function (e) {
    e.preventDefault();

    let text = document.getElementById("newQuote").value;
    let author = document.getElementById("newAuthor").value;

    let newQuote = {
        id: quotes.length,
        author: author,
        quote: text,
        likes: 0
    };

    quotes.push(newQuote);
    displayQuote(newQuote);

    this.reset();
};

document.getElementById("filterForm").onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById("filterAuthor").value.toLowerCase();

    filteredQuotes = quotes.filter(q =>
        q.author.toLowerCase().includes(name)
    );

    if (filteredQuotes.length > 0) {
        index = 0;
        displayQuote(filteredQuotes[index]);
    } else {
        quoteText.textContent = "No quotes found";
        quoteAuthor.textContent = "";
    }
};

document.getElementById("nextBtn").onclick = function () {
    if (filteredQuotes.length > 0) {
        index = (index + 1) % filteredQuotes.length;
        displayQuote(filteredQuotes[index]);
    }
};

document.getElementById("prevBtn").onclick = function () {
    if (filteredQuotes.length > 0) {
        index = (index - 1 + filteredQuotes.length) % filteredQuotes.length;
        displayQuote(filteredQuotes[index]);
    }
};
