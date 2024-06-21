// Generating Random Colors
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(i = 0; i < 6 /* # consists of six hexadecimal digits */; i++) {
        color += hex[Math.floor(Math.random() * 16 /* Multiplying positions from 0 to f */)] // Adding random 6 value to color (#)
    }
    return color;
};
// console.log(randomColor());

// Took a variable Globally
let intervalId;

// Changing background color on every 1 sec
const startChangingColor = function (){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
    // for clean code
    if (!intervalId) /* or intervalId === null */ {
        intervalId = setInterval(changeBgColor, 1000)
    }
};

// Stopping changing color using clearInterval
const stopChangingColor = function(){
    clearInterval(intervalId)
    // clean process
    intervalId = null // flushout
};

// addEventListener on Start button 
document.querySelector('#start').addEventListener('click', startChangingColor);

// addEventListener on Stop button
document.querySelector('#stop').addEventListener('click', stopChangingColor);

const hexCodeElement = document.querySelector('#hexCode');