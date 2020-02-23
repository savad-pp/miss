class Department{
    private detcode:string="CS10"
    name:string="CSE"
  protected no_of_employee:number=10

  showData(){
      console.log("CODE==",this.detcode)
      console.log("NAME==",this.name)
      console.log("NO EMP==",this.no_of_employee)
    }

}
 let d=new Department()
 console.log(d.name)
 d.showData()