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

//window.alert(`This is an alert!`);