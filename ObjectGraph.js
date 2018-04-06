var temp = 5;
function deposit(){
  console.log("this is deposit");
}
function withdraw(){
  console.log("this is withdraw");
}
function statement(){
  console.log("This is statement");
}

function NikhilBank(){
  var obj = {
    balance:0,
    deposit:deposit,
    withdraw:withdraw,
    statement:statement
  };
  return obj;
}
var g = NikhilBank();
g.deposit();
