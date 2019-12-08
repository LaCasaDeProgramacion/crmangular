import { store } from './stores';
import { category } from "./category";

export class product{
  $key?: string;
  id : number ;
  productName : string ;
  productDescription : string ;
  productPrice : number ;
  productImage : string;
  numberOfViews : number ;
  productQuantity : number ;
  productStatus : string ;
  productCategory:string;
  categories: number[];
  productSeller: string;
productDate:string = new Date().toISOString().split('T')[0];
//public category : category;
  category : {
    category_id : number ;
    category_name : string ;
  }
  waeldisplayattributtest?:boolean;
  productnewvalue?:number;
  producthavepromotion?:boolean;
  store:store;

  store_id:number;
  category_id:number;

/*
    constructor(productName , productDescription , productPrice , productImage,productCategory , numberOfViews,productQuantity,productStatus,productDate){
      this.productName = productName ;
      this.productDescription = productDescription ;
      this.productPrice= productPrice ;
      this.productImage=productImage ;
      this.numberOfViews = numberOfViews ;
      this.productQuantity = productQuantity ;
      this.productStatus = productStatus ;
      this.productDate = productDate ;
      this.productCategory= productCategory;

  }*/

  constructor(){

  }

}
