// let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.account = account;
    this.amount = amount;
  }

  commit() {
    this.account.balance += this.value();
  }

}

class Deposit extends Transaction {

  // get value
  value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {


  value() {
    return -this.amount;
  }

}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
t1 = new Withdrawal(10, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(20, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(40, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Balance:', myAccount.banace);
