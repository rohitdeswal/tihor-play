let cells = [];
for (let i = 1; i <= 9; i++) {
  cells.push(document.getElementById(`cell-${i}`));
}
let count = 1;
let gameover = false;

let resetbtn = document.querySelector("#resetBtn");

let winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.innerText === '' && !gameover) {
      cell.innerText = count % 2 === 1 ? 'X' : 'O';
      count++;

      if (count % 2 === 1) {
        document.querySelector('h2').innerText = "Player 1's Turn";
      } else {
        document.querySelector('h2').innerText = "Player 2's Turn";
      }
      resetbtn.style.display = 'inline-block';

      checkWinner();

    }
  });
});

function checkWinner() {
    for(let i=0; i<winPatterns.length; i++) { 
        let [a, b, c] = winPatterns[i];
        console.log(cells);
        if (cells[a].innerText !== '' && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            document.querySelector('h2').innerText = `${cells[a].innerText} Wins!`;
            cells[a].style.backgroundColor =  '#5FCF8F';
            cells[b].style.backgroundColor =  '#5FCF8F';
            cells[c].style.backgroundColor =  '#5FCF8F';
            gameover = true;
            return;
        }
    }
    if (count > 9) {
        document.querySelector('h2').innerText = "It's a Draw!";
        gameover = true;
    }
}

resetbtn.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#f6f1e8';
    });
    count = 1;
    gameover = false;
    document.querySelector('h2').innerText = "Player 1's Turn";
    resetbtn.style.display = 'none';
});

