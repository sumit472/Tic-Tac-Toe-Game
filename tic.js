let boxes = document.querySelector(".box");
let button = document.querySelector(".Reset");
let gameButton = document.querySelector(".new");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");

let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetButton = () => {
  turn0 = true;
  enableBoxes();
  msg_container.classList.add("hide");
};

boxes.forEach = (box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msg_container.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos2 != "") {
      if (pos1 === pos2 && pos2 === pos3);
      console.log("winner", pos1);
      showWinner(pos1);
    }
  }
};
gameButton.addEventListener("click", resetButton);
button.addEventListener("click", resetButton);
