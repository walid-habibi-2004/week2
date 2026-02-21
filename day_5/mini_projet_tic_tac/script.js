const boardElement = document.getElementById("board");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let board = Array(9).fill("");
let player = "";
let computer = "";
let level = "easy";
let gameActive = false;

const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [6, 4, 2]
];

const createBoard = () => {
    boardElement.innerHTML = "";
    board.forEach((_, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = index;
        cell.addEventListener("click", playerMove);
        boardElement.appendChild(cell);
    });
};

const chooseSymbol = (symbol) => {
    player = symbol;
    computer = symbol === "X" ? "O" : "X";
    gameActive = true;
    statusText.textContent = "Game Started!";
};

const setLevel = (selected) => {
    level = selected;
    statusText.textContent = "Level: " + selected;
};

const playerMove = (e) => {
    const index = e.target.id;
    if (!gameActive || board[index] !== "") return;

    makeMove(index, player);

    if (!checkGameOver()) {
        setTimeout(computerMove, 500);
    }
};

const makeMove = (index, symbol) => {
    board[index] = symbol;
    document.getElementById(index).textContent = symbol;
};

const computerMove = () => {
    let move;

    if (level === "easy") {
        const empty = board
            .map((val, i) => val === "" ? i : null)
            .filter(v => v !== null);
        move = empty[Math.floor(Math.random() * empty.length)];
    } else {
        move = getBestMove();
    }

    makeMove(move, computer);
    checkGameOver();
};

const getBestMove = () => {
    for (const combo of winCombos) {
        const [a, b, c] = combo;
        const values = [board[a], board[b], board[c]];
        if (values.filter(v => v === computer).length === 2 &&
            values.includes("")) {
            return combo[values.indexOf("")];
        }
    }

    for (const combo of winCombos) {
        const [a, b, c] = combo;
        const values = [board[a], board[b], board[c]];
        if (values.filter(v => v === player).length === 2 &&
            values.includes("")) {
            return combo[values.indexOf("")];
        }
    }

    const empty = board
        .map((val, i) => val === "" ? i : null)
        .filter(v => v !== null);

    return empty[Math.floor(Math.random() * empty.length)];
};

const checkWinner = (symbol) => {
    return winCombos.some(combo =>
        combo.every(index => board[index] === symbol)
    );
};

const checkGameOver = () => {
    if (checkWinner(player)) {
        statusText.textContent = "You Win!";
        endGame();
        return true;
    }
    if (checkWinner(computer)) {
        statusText.textContent = "Computer Wins!";
        endGame();
        return true;
    }
    if (board.every(cell => cell !== "")) {
        statusText.textContent = "Tie Game!";
        endGame();
        return true;
    }
    return false;
};

const endGame = () => {
    gameActive = false;
    restartBtn.style.display = "inline-block";
};

const restartGame = () => {
    board = Array(9).fill("");
    gameActive = true;
    statusText.textContent = "";
    restartBtn.style.display = "none";
    createBoard();
};

createBoard();
