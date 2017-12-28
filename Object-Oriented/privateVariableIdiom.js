function outerFunction() {
  var a = 0;
  var b = 0;
  this.getB = function() {
    return b;
  }
  function businessLogic() {
    // this function can modify variable b
    b++;
  }
  this.businessLogic = businessLogic;
}
var obj = new outerFunction();
console.log("variable b = " + obj.getB());
obj.businessLogic()
console.log("variable b = " + obj.getB());

/*
Output:
variable b = 0
variable b = 1
*/
