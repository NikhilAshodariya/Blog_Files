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
    this.__balance__ = balance;
  }

  get amount() {
    // console.log("Getting amount");
    return this.__balance__;
  }

  set amount(balance) {
    // console.log("setting amount");
    if (balance < 0) {
      console.log("balance cannot be negative");
    } else {
      this.__balance__ = balance;
    }
  }

  deposit(value) {
    this.__balance__ = this.__balance__ + value;
    console.log(`depositing value ${value}`);
  }

  withdraw(value) {
    if (this.__balance__ >= value) {
      this.__balance__ = this.__balance__ - value;
      console.log(`withdrawing value ${value}`);
    } else {
      console.log("insufficient balance");
    }
  }

  statement() {
    console.log(`amount  = ${this.__balance__}`);
    console.log(`object count = ${BankAccount.count}`);
  }
}

var ba1 = new BankAccount(5000);
ba1.amount = -12;
console.log("printing amount " + ba1.amount);
ba1.statement();
var ba2 = new BankAccount(2000);
ba2.statement();
var ba3 = new BankAccount(3000);
ba3.statement();



/*
Output:-
balance cannot be negative
printing amount 5000
amount  = 5000
object count = 1
amount  = 2000
object count = 2
amount  = 3000
object count = 3
*/
