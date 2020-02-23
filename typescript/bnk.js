var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/// <reference path='ibank.ts'/>
var Bank;
(function (Bank) {
    var accounts;
    (function (accounts) {
        var SavingAccount = /** @class */ (function (_super) {
            __extends(SavingAccount, _super);
            function SavingAccount(name, branch, ifsccode) {
                var _this = _super.call(this, name, branch, ifsccode) || this;
                _this.intrestrate = 0.5;
                return _this;
            }
            SavingAccount.prototype.findInterest = function () {
                console.log("Saving Account");
            };
            return SavingAccount;
        }(Bank.Bank_));
        accounts.SavingAccount = SavingAccount;
        var FixedAccount = /** @class */ (function (_super) {
            __extends(FixedAccount, _super);
            function FixedAccount() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.interestrate = 1.5;
                return _this;
            }
            FixedAccount.prototype.findInterest = function () {
                console.log("fixed acount");
            };
            return FixedAccount;
        }(Bank.Bank_));
        accounts.FixedAccount = FixedAccount;
    })(accounts = Bank.accounts || (Bank.accounts = {}));
})(Bank || (Bank = {}));
///<reference path='ibank.ts'/>
/// <reference path='accounts.ts'/>
function gatBankDetails(obj) {
    console.log(obj.branch);
    console.log(obj.ifsc);
    console.log(obj.name);
    obj.depostit(1000);
    console.log(obj.balance);
    obj.withdraw(500);
    console.log(obj.balance);
}
var bank1 = new Bank.Bank_("SBI", "SB1002", "KOCHIN");
gatBankDetails(bank1);
var account = new Bank.accounts.SavingAccount("federal", "kch", "ifsc");
gatBankDetails(account);
account.findInterest();
