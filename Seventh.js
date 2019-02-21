var x = parseInt(prompt("Please enter number", 0));
var y = parseInt(prompt("Please enter another number", 0));
var z = 0;
while (x>=0 && y>=0)
  {
    z = (x+y)/2;
    alert(z);
    x = parseInt(prompt("Please enter another number"));
    y = parseInt(prompt("Please enter another number"));
  }
