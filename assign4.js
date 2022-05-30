var N=parseInt(prompt("Enter the Number of month:"));
  {
    
      // Check for 31 Days
      if (N == 1 || N == 3 || N == 5
          || N == 7 || N == 8 || N == 10
          || N == 12) {
          console.log("31 Days.");
      }
    
      // Check for 30 Days
      else if (N == 4 || N == 6
               || N == 9 || N == 11) {
          console.log("30 Days.");
      }
    
      // Check for 28/29 Days
      else if (N == 2) {
          console.log("28/29 Days.");
      }
    
      // Else Invalid Input
      else {
          console.log("Invalid Month.");
      }
  }
    
  