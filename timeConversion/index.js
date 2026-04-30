let hoursInput = document.getElementById("hoursInput");
let minsInput = document.getElementById("minutesInput");
let button = document.getElementById("convertBtn");
let resultText = document.getElementById("timeInSeconds");
let errorText = document.getElementById("errorMsg");

errorText.classList.add("errorMsg");

button.addEventListener("click", function() {
    let hours = hoursInput.value;
    let minutes = minsInput.value;
    
    errorText.textContent = "";
    resultText.textContent = "";
    
    if (hours === "") {
        errorText.textContent = "Please enter a valid number of hours.";
    }
    else if (minutes === "") {
        errorText.textContent = "Please enter a valid number of minutes.";
    }
    else {
        let totalSeconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60);
        resultText.textContent = totalSeconds + " seconds";
        resultText.classList.add("timeInSeconds");
    }
});