// Generating Random Colors
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Variable to store interval ID
let intervalId;

// Selecting the hex code display element
const hexCodeElement = document.querySelector('#hexCode');

// Function to change background color every second
const startChangingColor = function () {
    function changeBgColor() {
        const newColor = randomColor(); // Generate a new random color
        document.body.style.backgroundColor = newColor; // Set the background color
        hexCodeElement.textContent = 'Hex Code : ' + newColor; // Show the hex code
    }

    // Set interval only if not already set
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
};

// Function to stop changing color
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

// Add event listeners to buttons
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
