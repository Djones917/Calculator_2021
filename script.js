const calculatorDisplay = document.querySelector('h1');
const inputBtn = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
   console.log(number);
}

// Add Event Listeners for Numbers, Operators and Decimal
inputBtns.forEach((inputBtn) => {
   if (inputBtn.classList.length === 0) {
       inputBtn.addEventListener('click', sendNumberValue)
   }
});