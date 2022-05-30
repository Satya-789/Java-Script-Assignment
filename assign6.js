// program to display the sum of natural numbers

// take input from the user
const numb = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= numb; i++) {
    sum += i;
}

console.log('The sum of  numbers:', sum);