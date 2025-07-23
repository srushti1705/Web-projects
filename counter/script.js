const decreasebtn = document.getElementById("decrease-btn");
const resetbtn = document.getElementById("reset-btn");
const increasebtn = document.getElementById("increase-btn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increasebtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreasebtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetbtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}