let myFormEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let nameErrorMsgEl = document.getElementById("nameErrorMsg");
let emailEl = document.getElementById("email");
let emailErrorMsgEl = document.getElementById("emailErrorMsg");

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrorMsgEl.textContent = "Name is required";
    }
    else {
        nameErrorMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrorMsgEl.textContent = "Email is required";
    }
    else {
        emailErrorMsgEl.textContent = "";
    }
});