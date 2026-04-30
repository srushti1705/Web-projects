let input = document.getElementById("themeUserInput");
let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let inputValue = input.value.toLowerCase();

        if (inputValue === "light") {
            bgContainer.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
            heading.style.color = "#000000";
        } 
        else if (inputValue === "dark") {
            bgContainer.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            heading.style.color = "#ffffff";
        }
        else {
            alert("Enter the valid theme");
        }
    }
})