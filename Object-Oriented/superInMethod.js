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
}

var obj2 = new B();
obj2.printData();

/*
Output:
calling class A Constructor
calling class B Constructor
p = 1
q = 2
r = 3
s = 4

*/
