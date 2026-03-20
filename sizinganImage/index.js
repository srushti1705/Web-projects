let imageElement = document.getElementById("image");

let defaultImageWidth = 200;
imageElement.style.width = defaultImageWidth + "px";

let warningMessage = document.getElementById("warningMessage");
let imageWidthText = document.getElementById("imageWidth");

imageWidthText.textContent = defaultImageWidth + "px";

function increment() {
    let currentWidth = parseInt(imageElement.style.width);

    if (currentWidth + 5 > 300) {
        warningMessage.textContent = "Width should not be more than 300px";
    } else {
        currentWidth = currentWidth + 5;
        imageElement.style.width = currentWidth + "px";
        imageWidthText.textContent = currentWidth + "px";
        warningMessage.textContent = "";
    }
}

function decrement() {
    let currentWidth = parseInt(imageElement.style.width);

    if (currentWidth - 5 < 100) {
        warningMessage.textContent = "Width should not be less than 100px";
    } else {
        currentWidth = currentWidth - 5;
        imageElement.style.width = currentWidth + "px";
        imageWidthText.textContent = currentWidth + "px";
        warningMessage.textContent = "";
    }
}