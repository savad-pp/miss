///<reference path='ibank.ts'/>
/// <reference path='accounts.ts'/>
function gatBankDetails(obj:Bank.Bank_){
console.log(obj.branch)
console.log(obj.ifsc)
console.log(obj.name)
obj.depostit(1000)
console.log(obj.balance)
obj.withdraw(500)
console.log(obj.balance)
}

let bank1=new Bank.Bank_("SBI","SB1002","KOCHIN")
gatBankDetails(bank1)
let account=new Bank.accounts.SavingAccount("federal","kch","ifsc")
gatBankDetails(account)
account.findInterest()