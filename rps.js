let win = document.getElementById("wins");
let tie = document.getElementById("ties");
let loss = document.getElementById("losses");

let playerBox = document.querySelector(".player");
let computerBox = document.querySelector(".computer");

let choices = document.querySelectorAll(".choice");

let options = ["rock", "paper", "scissors"];

choices.forEach(choice => {
  choice.addEventListener("click", () => {

    let player = choice.id;
    let computer = options[Math.floor(Math.random() * 3)];

    playerBox.innerHTML = `<img src="assets/${player}.png">`;
    computerBox.innerHTML = `<img src="assets/${computer}.png">`;

    checkWinner(player, computer);
  });
});


function checkWinner(player, computer) {

  if (player === computer) {
    tie.innerText = Number(tie.innerText) + 1;

  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    win.innerText = Number(win.innerText) + 1;

  } else {
    loss.innerText = Number(loss.innerText) + 1;
  }
}