// =========> Challenge 1:

const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

const usernames = [];
gameInfo.forEach(user => {
    usernames.push(user.username + "!");
});

console.log("Usernames:", usernames);


const winners = [];
gameInfo.forEach(user => {
    if (user.score > 5) {
        winners.push(user.username);
    }
});

console.log("Winners:", winners);


let totalScore = 0;
gameInfo.forEach(user => {
    totalScore += user.score;
});

console.log("Total Score:", totalScore);
