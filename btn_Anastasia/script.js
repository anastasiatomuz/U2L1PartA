const button = document.getElementById("button1");
const button2 = document.getElementById("button2");
const para = document.querySelector("p");

button.addEventListener("click", updateName);
button2.addEventListener("click", doubleANumber);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

function doubleANumber(){
    const userText = prompt("Enter a number", "0");
    const userNum = parseInt(userText)
    para.textContent = `The double of ${userNum} is ${userNum*2}`;
}

