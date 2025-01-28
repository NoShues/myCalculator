// ***Variables and Setup***
    // 1. Get the display element and store it in a variable

    // 2. Initialize variables to store:
    //     - Current input
    //     - First number
    //     - Operator
    //     - Second number

// ***Basic Math Functions***
    // 3. Define functions for basic math operations:
    //     - Add: Return the sum of two numbers
    //     - Subtract: Return the difference of two numbers
    //     - Multiply: Return the product of two numbers
    //     - Divide: Check for division by zero, otherwise return the quotient

// ***Operate Function***
    // 4. Define a function `operate`:
    //     - Take operator, first number, and second number as arguments
    //     - Convert inputs to numbers
    //     - Use a switch statement to call the correct math function based on the operator
    //     - Return the result

// ***Display and Clear Functions***
    // 5. Define a function to update the display:
    //     - Take a value and set the display's text content to it

    // 6. Define a function to clear the calculator:
    //     - Reset all variables to empty values or defaults
    //     - Reset the display to 0

// ***Event Listeners for Buttons***
    // 7. Add event listeners for number buttons:
    //     - Append the clicked number to the current input
    //     - Update the display with the new input

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

// ***Equals Button Logic***
    // 9. Add an event listener for the equals button:
    //     - If all values (first number, operator, current input) exist:
    //         - Save current input as the second number
    //         - Perform the operation using `operate`
    //         - Update the display with the result
    //         - Reset current input for future calculations

// ***Special Buttons***
    // 10. Add an event listener for the clear button:
    //     - Call the clear function to reset everything

    // 11. Add an event listener for the decimal button:
    //     - If current input doesn't already include a decimal:
    //         - Append a decimal point to the current input
    //         - Update the display

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
