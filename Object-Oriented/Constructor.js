class BankAccount{
  constructor(balance){
    /**
     * this keyword is used to create variable inside the table of the object.
     * This method is much like python. 
     */
    this.balance = balance;
  }
}

var ba = new BankAccount(5000);
console.log(ba);
