//console.log('Hello');
//console.log(`I like pizza`);

/*document.getElementById("myH1").textContent = 'Hello';
let age = 25;
console.log(`You are ${age} years old`);
console.log(typeof age);
console.log(`Hello`);
let online = true;
console.log(`Bro is online : ${online}`);
let username = window.prompt("Usernmae:");
console.log(username);*/


const PI = 3.1419;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("myH3").textContent = circumference;
}

const myText2 = document.getElementById("myText2");
const mySubmit2 = document.getElementById("mySubmit2");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit2.onclick = function(){

    age = myText2.value;
    age = Number(age);
    
    if(age >= 100){
        resultElement.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born.`
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit3 = document.getElementById("mySubmit3");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit3.onclick = function() {
    if(myCheckbox.checked) {
        subResult.textContent = `You are subscribed!`;
    }
    else {
        subResult.textContent = `You are not subscribed!`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(mastercardBtn.checked) {
        paymentResult.textContent = `You are paying with Master Card`;

    }
    else if(paypalBtn.checked) {
        paymentResult.textContent = `You are paying with Paypal`;

    }
    else {
        paymentResult.textContent = `Select a payment method!`;
    }
}

/*window.alert(`This is an alert!`);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`); */