class BankAccount{
  constructor(balance){
    /**
     * this keyword is used to create variable inside the table of the object.
     * This method is much like python.
     */
    this.balance = balance;
  }

  deposit(value){
    this.balance = this.balance + value;
    console.log(`depositing value ${value}`);
  }

  withdraw(value){
    if (this.balance >= value) {
      this.balance = this.balance - value;
      console.log(`withdrawing value ${value}`);
    }
    else{
      console.log("insufficient balance");
    }
  }

  statement(){
    console.log(`balance = ${this.balance}`);
  }
}

var ba = new BankAccount(5000);
console.log(ba);
ba.statement();
ba.deposit(100);
ba.statement();
ba.withdraw(50);
ba.statement();

/*
output:
BankAccount { balance: 5000 }
balance = 5000
depositing value 100
balance = 5100
withdrawing value 50
balance = 5050
*/
