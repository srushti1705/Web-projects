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

//window.alert(`This is an alert!`);

//switch statement
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

let testScore = 30;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break; 
    case testScore >= 50:
        letterGrade = "E";
        break;
    default:
        letterGrade = "F";   
}
console.log(letterGrade);

//string methods

let username = "Srushti ";

console.log(username.charAt(1));
console.log(username.indexOf("s"));
console.log(username.lastIndexOf("s"));
console.log(username.length);
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.repeat(3));
console.log(username.startsWith(" "));
console.log(username.endsWith(" "));
console.log(username.includes(" "));
console.log(username.replaceAll("s", "p"));
console.log(username.padStart(10, "s"));
console.log(username.padEnd(10, "s"));

/*method chaining

let userName = window.prompt("Enter your userName: ");
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName);

while loop

let loggedIn = false;
let username2;
let password;

while(!loggedIn){
    username2 = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username2 === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}*/

//for loop 
for(let i = 1; i <= 10; i++){
    if(i == 13) {
        continue;
    }
    else {
        console.log(i);
    }
} 

//functions
function happyBirthday(username, age){
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear, ${username}`);
    console.log(`Happy birthday to you!`);
    console.log(`You are ${age} years old!`);
}

console.log(happyBirthday("Bro", 20));

function isEven(number){

    return number % 2 === 0 ? true : false;
}
console.log(isEven(13)); 

function isValidEmail(email){

    return email.includes("@") ? true : false;
}
console.log(isValidEmail("Bro@fake.com"));