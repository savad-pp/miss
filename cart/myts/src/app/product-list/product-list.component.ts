import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ArrayService } from '../array.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productlist:any;
//quantity:any;
cart:any
quantity:number=0
flag:number=0
ii:any
a:number
flager:boolean
total_prise:number


  constructor(private service:ProductService,private datacart:ArrayService) {

   }

  ngOnInit() {
    
    this.service.getData().subscribe((item)=>{
        this.productlist=item
        console.log(this.productlist)    
    })
   this.cart= this.datacart.getArrayData()
  }
  addQntty(data){
    this.total_prise=0
    this.flager=false
    this.a=this.cart.length
    if(this.cart.length==0){
      
    this.cart.push(data)
    this.cart[0].quantity=++this.quantity
    //this.total_prise=this.total_prise+((this.cart[0].quantity)*(this.cart[0].price))
       console.log("==0",this.cart)
       
      }   
       else{

        for (var i=0;i<this.cart.length;i++)
        {
          if(this.flager==true){
            break;
          }
          console.log("dat.pid",data.pid)
          console.log("this.cart[i].pid",this.cart[i].pid)
         if(this.cart[i].pid==data.pid){
          this.cart[i].quantity=++this.cart[i].quantity
         
          console.log("quantity inc",this.cart)
           console.log("flager",this.flager)
          break;
         

         }else{
          console.log("else")
          if(this.cart[0].pid==data.pid){
            this.cart[0].quantity=++this.cart[0].quantity
            //this.total_prise=this.total_prise+((this.cart[0].quantity)*(this.cart[0].price))
            break;
          }
          else{

            for(let j=1;j<5;j++)
             {
              
            if(this.cart.length==j){
            this.cart.push(data)
            this.cart[j].quantity=++this.cart[j].quantity
            this.flager=true
            console.log("new",this.cart)
          break;
        }else{
          if(this.cart[j].pid==data.pid){
            this.cart[j].quantity=++this.cart[j].quantity
            console.log("[1] inc",this.cart)
            this.flager=true
            break;
          }
        
        }
        }
     
        }
      }
      // this.total_prise=this.total_prise+((this.cart[i].quantity)*(this.cart[i].price))
      // console.log("**this.productlist**",this.total_prise)
      // console.log("****",typeof(this.cart[i].price))
      // console.log("****",typeof(this.cart[i].quantity))
        }
       
        
        }

        for(let c in this.cart){
            
        this.total_prise=this.total_prise+((this.cart[c].quantity)*(this.cart[c].price))
        console.log("**this.productlist**",this.total_prise)
        console.log("****",typeof(this.cart[i].price))
        console.log("****",typeof(this.cart[i].quantity))  }
        console.log("service====",this.datacart)
  }
  
  decQntty(input){
    
console.log("dec")
    if(this.quantity>0){
    
    }
    else{
      alert("cannot decriment")
    }

    
      for (var i=0;i<this.cart.length;i++)
        {
         
          if(this.cart[i].pid==input.pid){
            if(this.cart[i].quantity==0){
              alert("cannot decrimentttt")
              break;
            }else{
            this.cart[i].quantity=--this.cart[i].quantity
            this.total_prise=this.total_prise-(this.cart[i].price)
            console.log(input)
            break;

          }
        }


        }
    }



}






// this.a=this.cart.length
//     if(this.cart.length==0){
      
//     this.cart.push(data)
//     this.cart[0].quantity=++this.quantity
//        console.log("==0",this.cart)
       
//       }   
//        else{

//         for (var i=0;i<this.cart.length;i++)
//         {
//           console.log("dat.pid",data.pid)
//           console.log("this.cart[i].pid",this.cart[i].pid)
//          if(this.cart[i].pid==data.pid){
//           this.cart[i].quantity=++this.cart[i].quantity
          
//           console.log("quantity inc",this.cart)
//           break;
         

//          }else{
//           console.log("else")
//           if(this.cart[0].pid==data.pid){
//             this.cart[0].quantity=++this.cart[0].quantity
//             break;
//           }
//           else{

//             for(let j=0;j<this.cart.length;j++)
//              {
//                let c=1
//             if(this.cart.length==c){
//             this.cart.push(data)
//             this.cart[c].quantity=++this.cart[c].quantity
//             console.log("new",this.cart)
//           break;
//         }else{
//           if(this.cart[c].pid==data.pid){
//             this.cart[c].quantity=++this.cart[c].quantity
//             console.log("[1] inc",this.cart)
//             break;
//           }
//           c++
//         }
//         }
     

//         if(i==this.cart.length){
//           alert("end")
//           break;
//         }
       



        
//         }
//           }

//         }
       
        
//         }
            
    
       
      