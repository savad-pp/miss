/// <reference path='ibank.ts'/>
namespace Bank{
  export  namespace accounts{
    export class SavingAccount extends Bank_{
        intrestrate=0.5
        constructor(name,branch,ifsccode){
            super(name,branch,ifsccode)

        }
        findInterest(){
            console.log("Saving Account")
        }
        
    }
export class FixedAccount extends Bank_{
    interestrate=1.5
    findInterest(){
        console.log("fixed acount")
    }
}

    }
}
