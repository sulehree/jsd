// console.log("chainMethod");


class BankAccount {
    constructor(onwer, pin) {
        this.onwer = onwer;
        this.pin = pin;
        this.movements = [];

    }
    getMovements() {
        return this.movements;
    }

    deposit(amount = 0) {
        this.movements.push(amount);
        return this;
    }
    withdrawl(amount = 0) {// this is how we define default values for a function {
        this.deposit(-amount);
        return this;
    }

    get Balance() { // in class every variable has to define
        let result = 0;
        let balance = 0;

        balance = this.movements.reduce(function (sum, element) {
            result = sum + element
            return result;
        }, 0)
        return balance;
    }



    return

}




let newAccount = new BankAccount("Abbas", 8888);
console.log(newAccount);
newAccount.deposit(50);
console.log("Balance is ", newAccount.Balance)
newAccount.deposit(60);
console.log("Balance is ", newAccount.Balance)
newAccount.deposit(70);
console.log("Balance is ", newAccount.Balance)
newAccount.withdrawl(50);
console.log("Balance is ", newAccount.Balance)
newAccount.deposit(100).withdrawl(100).deposit(100).withdrawl(100);
console.log("Balance is ", newAccount.Balance)