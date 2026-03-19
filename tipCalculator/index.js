function calculatedTipandtotalAmount() {

    let bill = document.getElementById("billAmount").value;
    let tipPercent = document.getElementById("percentageTip").value;
    let errorMessage = document.getElementById("errorMessage");

    if (bill === "" || tipPercent === "") {
        errorMessage.textContent = "Please enter a valid input";

        document.getElementById("tipAmount").value = "";
        document.getElementById("totalAmount").value = "";
    } 
    else {
        errorMessage.textContent = "";

        let tipAmount = (tipPercent / 100) * bill;
        document.getElementById("tipAmount").value = tipAmount;

        let totalAmount = bill * 1+ tipAmount;
        document.getElementById("totalAmount").value = totalAmount;
    }
}