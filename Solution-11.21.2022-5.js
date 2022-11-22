class Account {
    constructor(owner,) {
        this.owner = owner;
        this.balance = 0; //Start at 0 for new accounts
    }
    credit(amount){
        this.balance += amount;
    }
    describe(){
        return `Owner: ${this.owner}, Balance: ${this.balance}`;
    }
}

const accountList = [];
accountList.push(new Account('Sean'));
accountList.push(new Account('Brad'));
accountList.push(new Account('George'));

accountList.forEach(account => {
    account.credit(1000);
    console.log(account.describe());
});