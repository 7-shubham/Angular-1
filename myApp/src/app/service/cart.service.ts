import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

   getProducts(){

      return this.productList.asObservable();
   }

   addtoCart(product :any){

       this.cartItemList.push(product);
       this.productList.next(this.cartItemList);
       this.gettotalPrice();
       console.log(this.cartItemList);

   }

    gettotalPrice():number{

        let grandTotal = 0;
        this.cartItemList.map((a:any)=>{

           grandTotal = grandTotal + a.total;
        })

        return grandTotal;
      
    }

   removecartItem(product:any){
  
      this.cartItemList.map((a:any , index:any)=>{

          if(product.id == a.id){

              this.cartItemList.splice(index , 1)
          }
      })

      this.productList.next(this.cartItemList);
       
   }

   removeAll(){

      this.cartItemList = []
      this.productList.next(this.cartItemList);
   }

}
