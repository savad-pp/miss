namespace Bank{
    //export title:=""
    export interface IBank{
        name:string
        ifsc:string
        branch:string

        depostit(amount:number)
        withdraw(amount:number)
    }
    export class Bank_ implements IBank{
        name: string;        ifsc: string;
        branch:string
        balance:number=0
        constructor(name:string,ifsc:string,branch:string){
            this.name=name
            this.ifsc=ifsc
            this.branch=branch
        }

        depostit(amount: number) {
            this.balance+=amount
        }
        withdraw(amount: number) {
            if(this.balance>amount){
            this.balance-=amount
        }
        else{
            console.log("AMOUNT NOT AVAILABLE")
        }
    }

        
    }

}