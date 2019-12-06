export class product{
  id : number ;
  productName : string ;
  productDescription : string ;
  productPrice : number ;
  productImage : string;
  numberOfViews : number ;
  productQuantity : number ;
  productStatus : string ;
  productCategory:string;
  productSeller: string;
  productDate? : Date ;
  category : {
    category_id : number ;
    category_name : string ;
  }
  waeldisplayattributtest?:boolean;
  productnewvalue?:number;
  producthavepromotion?:boolean;
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

  }

}
