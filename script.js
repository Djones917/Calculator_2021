const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');


let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;


function sendNumberValue(number) {
   // Replace current display value if first value is entered
   if (awaitingNextValue) {
      calculatorDisplay.textContent = number;
   }
}

function addDecimal() {
   // If no decimal, add one
   if (!calculatorDisplay.textContent.includes('.')) {
      calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
   } else {
      console.log('currentValue', currentValue);
   }
}

function useOperator(operator) {
   const currentValue = Number(calculatorDisplay.textContent);
   // Assign First Value, If no Value
   if (!firstValue) {
      firstValue = currentValue;
   }
   // Ready for next value, store operator
   awaitingNextValue = true;
   operatorValue = operator;
   console.log('firstValue', firstValue);
   console.log('operator', operatorValue);
}

// Add Event Listeners for Numbers, Operators and Decimal
inputBtns.forEach((inputBtn) => {
   if (inputBtn.classList.length === 0) {
       inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
   } else if (inputBtn.classList.contains('operator')) {
      inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
   } else if (inputBtn.classList.contains('decimal')) {
      inputBtn.addEventListener('click', () => addDecimal());
   }
});

// Reset all values, display
function resetAll() {
   firstValue = 0;
   operatorValue = '';
   awaitingNextValue = false;   
   calculatorDisplay.textContent = '0';
}

// Event Listener
clearBtn.addEventListener('click', resetAll);