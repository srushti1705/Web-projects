let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");

addBtn.onclick = function () {

    if (userInput.value === "") {
        errorMsg.textContent = "Please enter a word";
    } else {
        errorMsg.textContent = "";

        let spanEl = document.createElement("span");
        spanEl.textContent = userInput.value;

        let randomFontSize = Math.ceil(Math.random() * 40);
        spanEl.style.fontSize = randomFontSize + "px";
        spanEl.style.margin = "5px";

        wordsContainer.appendChild(spanEl);
        
        userInput.value = "";
    }
};