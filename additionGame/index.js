function checkAns() {
    let correctAns = parseInt(document.getElementById("firstNumber").textContent) + parseInt(document.getElementById("secondNumber").textContent);
    let userAns = parseInt(document.getElementById("userInput").value);
     
    if (userAns === correctAns) {
        document.getElementById("gameResult").textContent = "Congratulations! You got it right.";
        document.getElementById('gameResult').style.backgroundColor = "#028a0f";
    }
    else if (userAns !== correctAns) {
        document.getElementById("gameResult").textContent = "Please Try Again!";
        document.getElementById('gameResult').style.backgroundColor = "#1e217c";
    }
}

function restart() {
    document.getElementById("firstNumber").textContent = Math.floor(Math.random() * 100);
    document.getElementById("secondNumber").textContent = Math.floor(Math.random() * 100);
    document.getElementById("gameResult").textContent = "";
    document.getElementById("userInput").value = "";
} 

restart();