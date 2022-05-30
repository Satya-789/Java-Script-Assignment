
// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Please enter a positive number');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}