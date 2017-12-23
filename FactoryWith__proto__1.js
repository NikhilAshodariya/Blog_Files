function deposit(value) {
  this.balance = this.balance + value;
  console.log(`depositing value = ${value}`);
}

function withdraw(value) {
  if (this.balance >= value) {
    this.balance = this.balance - value;
    console.log(`Removing value = ${this.balance}`);
  } else {
    console.log("Insufficient balance");
  }
}

function statement() {
  console.log(`balance = ${this.balance}`);
}

var baseFunction = {
  deposit: deposit,
  withdraw: withdraw,
  statement: statement
}

function getBankAccount() {
  var obj = {
    balance: 0,
  };
  obj.__proto__.deposit = deposit;
  obj.__proto__.withdraw = withdraw;
  obj.__proto__.statement = statement;
  return obj;
}

var b1 = getBankAccount();
var b2 = getBankAccount();

b1.deposit(100);
b1.statement();
b1.withdraw(50);
b1.statement();

b2.deposit(200);
b2.statement();
b2.withdraw(100);
b2.statement();
