// program to solve quadratic equation
let root1, root2;

// take input from the user
let No = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * No * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * No);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * No);
    let r1=root1.toFixed(2);
    let r2=root2.toFixed(2);

    // result
    console.log(`The roots of quadratic equation are ${r1} and ${r2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * No);
    let r1 =root1.toFixed(2)=root2.toFixed(2);
    // result
    console.log(`The roots of quadratic equation are ${r1} and ${r1}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * No));
    let r1= realPart.toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * No));
    let r2=imagPart.toFixed(2);
    // result
    console.log(
    `The roots of quadratic equation are ${r1} + ${r2}i and ${r1} - ${r2}i`
  );
}

    

    
   
 


