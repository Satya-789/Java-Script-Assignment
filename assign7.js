var num=parseInt(prompt("enter a number"));
  let term=1;
  if (num<0) {
      console.log("error");
      
  } else if (num==0) {
      console.log("the value is 0")
      
  }else if (num>0)
    {
    term = num*num
    console.log(term)
  }