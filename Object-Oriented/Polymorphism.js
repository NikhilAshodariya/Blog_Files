class A {
  constructor() {
    console.log("calling class A Constructor");
    this.p = 1;
    this.q = 2;
  }

  printData() {
    console.log(`p = ${this.p}`);
    console.log(`q = ${this.q}`);
  }

  checkMethod(){
    console.log("this is a check method of class A");
  }
}

class B extends A {
  constructor() {
    super(); // super must be the first line of the code
    console.log("calling class B Constructor");
    this.r = 3;
    this.s = 4;
  }

  printData() {
    super.printData();
    console.log(`r = ${this.r}`);
    console.log(`s = ${this.s}`);
  }

  checkMethod(){
    console.log("This is a check method of class B");
  }
}


function execute(obj){
  console.log("--------------Start------------");
  obj.checkMethod();
  console.log("is instance of class A ==== "+(obj instanceof A));
  console.log("is instance of class B ==== "+(obj instanceof B));
  console.log("-------------End---------------");
}

var obj1 = new A();
var obj2 = new B();
obj2.p = 323;
obj2.q = 121;
console.log("printing Obj1");
obj1.printData();
console.log("printing Obj2");
obj2.printData();
execute(obj1);
execute(obj2);


/*
Output:-
calling class A Constructor
calling class A Constructor
calling class B Constructor
printing Obj1
p = 1
q = 2
printing Obj2
p = 323
q = 121
r = 3
s = 4
--------------Start------------
this is a check method of class A
is instance of class A ==== true
is instance of class B ==== false
-------------End---------------
--------------Start------------
This is a check method of class B
is instance of class A ==== true
is instance of class B ==== true
-------------End---------------
*/
