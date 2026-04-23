// Shows an alert when the page loads
alert('Hello, welcome to my website!');

// Select elements from the DOM (must match your HTML IDs)
const message = document.getElementById("message");
const changeTextBtn = document.getElementById("change-text-btn");
const toggleTextElement = document.getElementById("toggle-text");

// Event: change text when button is clicked
changeTextBtn.addEventListener("click", function(){
    message.textContent = "You have changed this text using JavaScript!";
});

// Function to show/hide text (used in pets page)
function toggleText() {
    const button = event.target;

    if (toggleTextElement.style.display === "none") {
        toggleTextElement.style.display = "block";
        button.textContent = "Hide";
    } else {
        toggleTextElement.style.display = "none";
        button.textContent = "Show";
    }
}

