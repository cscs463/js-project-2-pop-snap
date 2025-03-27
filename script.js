// script.js

// Get references to the HTML elements we need
const numberInput = document.getElementById("numberInput");
const checkButton = document.getElementById("checkButton");
const resultDiv = document.getElementById("result");

// Add an event listener to the button
checkButton.addEventListener("click", function() {
    // Get the value from the input box
    const inputValue = numberInput.value;

    // Convert the input to an integer
    const number = parseInt(inputValue);

    // Check if the conversion was successful (parseInt might return NaN if the input is not a valid number)
    if (isNaN(number)) {
        resultDiv.textContent = "Please enter a valid number.";
        return; // Stop the function if the input is not a number
    }

    // Apply the PopSnap logic using if, else if, and else
    if (number % 4 === 0 && number % 6 === 0) {
        resultDiv.textContent = "PopSnap";
    } else if (number % 4 === 0) {
        resultDiv.textContent = "Pop";
    } else if (number % 6 === 0) {
        resultDiv.textContent = "Snap";
    } else {
        resultDiv.textContent = number;
    }
});