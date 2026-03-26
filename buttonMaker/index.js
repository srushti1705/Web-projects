function changeStyle() {
    document.getElementById("customButton").style.backgroundColor = document.getElementById("bgColorInput").value;
    document.getElementById("customButton").style.color = document.getElementById("fontColorInput").value;
    document.getElementById("customButton").style.fontSize = document.getElementById("fontSizeInput").value + "px";
    document.getElementById("customButton").style.fontWeight = document.getElementById("fontWeightInput").value;
    document.getElementById("customButton").style.padding = document.getElementById("paddingInput").value + "px";
    document.getElementById("customButton").style.borderRadius = document.getElementById("borderRadiusInput").value + "px";
}