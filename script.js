const cells = document.querySelectorAll(".cell");
const status = document.querySelector("#status");
const reset = document.querySelector("#reset");
const newGame = document.querySelector("#newGame");

const xScore = document.querySelector("#xScore");
const oScore = document.querySelector("#oScore");
const drawScore = document.querySelector("#drawScore");

let player = "X";
let gameOver = false;

let xWins = 0;
let oWins = 0;
let draws = 0;

const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(function(cell) {

    cell.addEventListener("click", function() {

        if (cell.textContent !== "" || gameOver) {
            return;
        }

        cell.textContent = player;

        if (checkWinner()) {
            status.textContent = "🎉 Player " + player + " Wins!";
            gameOver = true;

            if (player === "X") {
                xWins++;
                xScore.textContent = xWins;
            } else {
                oWins++;
                oScore.textContent = oWins;
            }

            return;
        }

        if ([...cells].every(cell => cell.textContent !== "")) {
            status.textContent = "🤝 Game Draw!";
            draws++;
            drawScore.textContent = draws;
            gameOver = true;
            return;
        }

        player = player === "X" ? "O" : "X";
        status.textContent = "Player " + player + "'s Turn";
    });
});

function checkWinner() {

    for (let pattern of patterns) {

        let a = cells[pattern[0]].textContent;
        let b = cells[pattern[1]].textContent;
        let c = cells[pattern[2]].textContent;

        if (a !== "" && a === b && b === c) {

    pattern.forEach(function(index) {
        cells[index].classList.add("winner");
    });

    return true;
}
    }

    return false;
}

reset.addEventListener("click", function() {

    cells.forEach(function(cell) {
        cell.textContent = "";
        cell.style.backgroundColor = "";
    });

    player = "X";
    gameOver = false;

    status.textContent = "Player X's Turn";
});
newGame.addEventListener("click", function() {

    cells.forEach(function(cell) {
        cell.textContent = "";
        cell.style.backgroundColor = "";
        cell.classList.remove("winner");
    });

    player = "X";
    gameOver = false;

    status.textContent = "Player X's Turn";
});
document.getElementById("newGame").addEventListener("click", function() {
    board = ["", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;

    cells.forEach(function(cell) {
        cell.textContent = "";
        cell.style.backgroundColor = "";
    });

    statusText.textContent = "Player X's Turn";
});
if (winner) {
    winningCombination.forEach(index => {
        cells[index].classList.add(
            winner === "X" ? "winner-x" : "winner-o"
        );
    });

    statusText.textContent = `🎉 Player ${winner} Wins!`;
}
