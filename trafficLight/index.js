function stopFunction() {
    document.getElementById("stopLight").style.backgroundColor = "red";
    document.getElementById("readyLight").style.backgroundColor = "#4b5069";
    document.getElementById("goLight").style.backgroundColor = "#4b5069";

    document.getElementById("stopButton").style.backgroundColor = "red";
    document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    document.getElementById("goButton").style.backgroundColor = "#1f1d41";
}

function readyFunction() {
    document.getElementById("stopLight").style.backgroundColor = "#4b5069";
    document.getElementById("readyLight").style.backgroundColor = "yellow";
    document.getElementById("goLight").style.backgroundColor = "#4b5069";

    document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
    document.getElementById("readyButton").style.backgroundColor = "yellow";
    document.getElementById("goButton").style.backgroundColor = "#1f1d41";

    document.getElementById("readyButton").style.color = "black";
}

function goFunction() {
    document.getElementById("stopLight").style.backgroundColor = "#4b5069";
    document.getElementById("readyLight").style.backgroundColor = "#4b5069";
    document.getElementById("goLight").style.backgroundColor = "green";

    document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
    document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    document.getElementById("goButton").style.backgroundColor = "green";
}