class A {
  constructor() {
    console.log("creating object of class A");
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
    console.log("creating Object of class B");
    this.r = 3;
    this.s = 4;
  }

  printData() {
    console.log(`p = ${this.p}`);
    console.log(`q = ${this.q}`);
    console.log(`r = ${this.r}`);
    console.log(`s = ${this.s}`);
  }
}

var obj2 = new B();
obj2.printData();

/*
Output:
creating object of class A
creating Object of class B
p = 1
q = 2
r = 3
s = 4
*/
