// A Javascript program to generate palindromic
    // numbers less than n.
     
    // A utility for creating palindrome
    function createPalindrome(input, b, isOdd)
    {
        let n = input;
        let palin = input;
 
        // checks if number of digits is odd
        // or even if odd then neglect the
        // last digit of input in finding reverse
        // as in case of odd number of digits
        // middle element occur once
        if (isOdd == 1)
            n = parseInt(n / b, 10);
 
        // Creates palindrome by just appending
        // reverse of number to itself
        while (n > 0)
        {
            palin = palin * b + (n % b);
            n = parseInt(n / b, 10);
        }
        return palin;
    }
 
    // Function to print decimal
    // palindromic number
    function generatePalindromes(n)
    {
        let number;
 
        // Run two times for odd and even
        // length palindromes
        for (let j = 0; j < 2; j++)
        {
 
            // Creates palindrome numbers with first
            // half as i. Value of j decided whether
            // we need an odd length of even length
            // palindrome.
            let i = 1;
            while ((number = createPalindrome(i, 10, j % 2)) <= n)
            {
                document.write(number + " ");
                i++;
            }
        }
    }
     
    let ab = parseInt(prompt("Enter a Number"));
    (generatePalindromes(ab));