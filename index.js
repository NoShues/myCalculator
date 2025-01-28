// ***Variables and Setup***
    // 1. Get the display element and store it in a variable
    const display = document.getElementById('display');

    // 2. Initialize variables to store:
    //     - Current input
    //     - First number
    //     - Operator
    //     - Second number
    let currentInput = '';
    let firstNumber = '';
    let operator = '';
    let secondNumber = '';
    
// ***Basic Math Functions***
    // 3. Define functions for basic math operations:
    //     - Add: Return the sum of two numbers
    //     - Subtract: Return the difference of two numbers
    //     - Multiply: Return the product of two numbers
    //     - Divide: Check for division by zero, otherwise return the quotient
    function add(a, b) {
        return a + b;
    }
    
    function subtract(a, b) {
        return a - b;
    }
    
    function multiply(a, b) {
        return a * b;
    }
    
    function divide(a, b) {
        if (b === 0) return "Error: seriously? Dividing by 0?! ";
        return a / b;
    }

// ***Operate Function***
    // 4. Define a function `operate`:
    //     - Take operator, first number, and second number as arguments
    //     - Convert inputs to numbers
    //     - Use a switch statement to call the correct math function based on the operator
    //     - Return the result
    function operate(operator, a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
    
        switch (operator) {
            case '+':
                return add(a, b);
            case '-':
                return subtract(a, b);
            case '*':
                return multiply(a, b);
            case '/':
                return divide(a, b);
            default:
                return null;
        }
    }

// ***Display and Clear Functions***
    // 5. Define a function to update the display:
    //     - Take a value and set the display's text content to it
    function updateDisplay(value) {
        display.textContent = value;
    }

    // 6. Define a function to clear the calculator:
    //     - Reset all variables to empty values or defaults
    //     - Reset the display to 0
    function clearCalculator() {
        currentInput = '';
        firstNumber = '';
        operator = '';
        secondNumber = '';
        updateDisplay('0');
    }

// ***Event Listeners for Buttons***
    // 7. Add event listeners for number buttons:
    //     - Append the clicked number to the current input
    //     - Update the display with the new input
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            if (currentInput.length < 15) {
                currentInput += button.textContent;
                updateDisplay(currentInput);
            }
        });
    });

    // 8. Add event listeners for operator buttons:
    //     - If no first number exists and there is input:
    //         - Save current input as the first number
    //         - Save the selected operator
    //         - Clear the current input for the next number
    //     - If there is already a first number and input:
    //         - Save current input as the second number
    //         - Perform the operation using `operate`
    //         - Save the result as the first number for future operations
    //         - Update the display
    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            if (firstNumber === '' && currentInput !== '') {
                firstNumber = currentInput;
                operator = button.textContent;
                currentInput = '';
            } else if (firstNumber !== '' && currentInput !== '') {
                secondNumber = currentInput;
                firstNumber = operate(operator, firstNumber, secondNumber);
                operator = button.textContent;
                currentInput = '';
                updateDisplay(firstNumber);
            }
        });
    });

// ***Equals Button Logic***
    // 9. Add an event listener for the equals button:
    //     - If all values (first number, operator, current input) exist:
    //         - Save current input as the second number
    //         - Perform the operation using `operate`
    //         - Update the display with the result
    //         - Reset current input for future calculations
    document.getElementById('equals').addEventListener('click', () => {
        if (firstNumber !== '' && operator !== '' && currentInput !== '') {
            secondNumber = currentInput;
            const result = operate(operator, firstNumber, secondNumber);
            updateDisplay(result);
            firstNumber = result;
            currentInput = '';
        }
    });

// ***Special Buttons***
    // 10. Add an event listener for the clear button:
    //     - Call the clear function to reset everything
    let clear = document.getElementById('clear').addEventListener('click', clearCalculator);

// Handle decimal button

// 11. Add an event listener for the decimal button:
//     - If current input doesn't already include a decimal:
//         - Append a decimal point to the current input
//         - Update the display
document.getElementById('decimal').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
});

// ***Keyboard Support***
    // 12. Add a keyboard listener for keypress events:
    //     - If a number is pressed:
    //         - Append it to the current input and update the display
    //     - If an operator is pressed:
    //         - Handle it like clicking the operator button
    //     - If "Enter" or "=" is pressed:
    //         - Perform the calculation and update the display
    //     - If "Backspace" is pressed:
    //         - Remove the last character from the current input and update the display
    //     - If "C" is pressed:
    //         - Call the clear function
 
    document.addEventListener('keydown', (e) => {
        const key = e.key;
    
        // Handle number input (main keyboard and numpad)
        if (!isNaN(key)) {
            currentInput += key;
            updateDisplay(currentInput);
        }
    
        // Handle operator input (main keyboard and numpad)
        else if (['+', '-', '*', '/'].includes(key)) {
            if (currentInput !== '') {
                if (firstNumber === '') {
                    firstNumber = currentInput;
                    operator = key; // Save the operator
                    currentInput = ''; // Clear input for next number
                } else if (currentInput !== '') {
                    // If chaining operations
                    secondNumber = currentInput;
                    const result = operate(operator, firstNumber, secondNumber);
                    updateDisplay(result);
                    firstNumber = result; // Store result as firstNumber for next operation
                    operator = key; // Update the operator
                    currentInput = ''; // Clear input for next number
                }
            }
        }
    
        // Handle Enter or Equals (perform calculation)
        else if (key === 'Enter' || key === '=') {
            if (firstNumber !== '' && operator !== '' && currentInput !== '') {
                secondNumber = currentInput;
                const result = operate(operator, firstNumber, secondNumber);
                updateDisplay(result);
                firstNumber = result; // Store result for further calculations
                operator = ''; // Clear operator
                currentInput = ''; // Clear current input
            }
        }
    
        // Handle Backspace (delete last digit)
        else if (key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
        }
    
        // Handle Clear (reset everything)
        else if (key.toLowerCase() === 'c') {
            clearCalculator();
        }
    });
    
    

    