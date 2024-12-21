let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please enter a Valid Input";

function calculate() {

    if (billAmountElement.value === "") {
        errorMessageElement.textContent = errorMessage;
    } else if (percentageTipElement.value === "") {
        errorMessageElement.textContent = errorMessage;
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountElement.value);
        let percentageTip = parseInt(percentageTipElement.value);
        let calculatedtipAmount = (percentageTip / 100) * billAmount;
        let totalAmount = billAmount + calculatedtipAmount;

        tipAmountElement.value = calculatedtipAmount;
        totalAmountElement.value = totalAmount;
    }
}