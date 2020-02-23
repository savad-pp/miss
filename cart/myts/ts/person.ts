class Person{
    private static pid=1
    name:string
    age:number
    address:string
    constructor(name,age,address){
      this.name=name
        this.age=age 
               this.address=address
    }
    view(){
        console.log( this.name,
            this.age, 
                   this.address)
    }
}
class student extends Person{
    roll_no:number
    marks:number[]

    constructor(name,age,address,rollno,marks){
        super(name,age,address)//for calling create parent(person) object
        this.roll_no=rollno
        this.marks=marks
    }
    view(){
        console.log( this.name,
            this.age, 
                   this.address,this.marks,this.roll_no)
                   super.view()//protected and public methods only accessible    
    }
}

let obj:student =new student("savad","23","pp",11,[10,20,14])
obj.view()