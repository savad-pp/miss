var Bank;
(function (Bank) {
    var Bank_ = /** @class */ (function () {
        function Bank_(name, ifsc, branch) {
            this.balance = 0;
            this.name = name;
            this.ifsc = ifsc;
            this.branch = branch;
        }
        Bank_.prototype.depostit = function (amount) {
            this.balance += amount;
        };
        Bank_.prototype.withdraw = function (amount) {
            if (this.balance > amount) {
                this.balance -= amount;
            }
            else {
                console.log("AMOUNT NOT AVAILABLE");
            }
        };
        return Bank_;
    }());
    Bank.Bank_ = Bank_;
})(Bank || (Bank = {}));
///<reference path='ibank.ts'/>
function gatBankDetails(obj) {
    console.log(obj.branch);
    console.log(obj.ifsc);
    console.log(obj.name);
    obj.depostit(100);
    console.log(obj.balance);
    obj.withdraw(500);
    console.log(obj.balance);
}
var bank1 = new Bank.Bank_("SBI", "SB1002", "KOCHIN");
gatBankDetails(bank1);
