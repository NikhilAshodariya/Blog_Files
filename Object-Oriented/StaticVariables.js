class BankAccount {
  constructor(balance) {
    /**
     * this keyword is used to create variable inside the table of the object.
     * This method is much like python.
     */
    if (BankAccount.count == undefined) {
      BankAccount.count = 1;
    } else {
      BankAccount.count++;
    }
    this.balance = balance;
  }

  deposit(value) {
    this.balance = this.balance + value;
    console.log(`depositing value ${value}`);
  }

  withdraw(value) {
    if (this.balance >= value) {
      this.balance = this.balance - value;
      console.log(`withdrawing value ${value}`);
    } else {
      console.log("insufficient balance");
    }
  }

  statement() {
    console.log(`balance = ${this.balance}`);
    console.log(`object count = ${BankAccount.count}`);
  }
}

var ba1 = new BankAccount(5000);
ba1.statement();
var ba2= new BankAccount(2000);
ba2.statement();
var ba3 = new BankAccount(3000);
ba3.statement();

/*
Output:
balance = 5000
object count = 1
balance = 2000
object count = 2
balance = 3000
object count = 3
*/
