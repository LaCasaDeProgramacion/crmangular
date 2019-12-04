import { product } from "./product";

export interface Promotion{
    id?:number;
    title?:string;
    promotiontype?:string;
    promotionvaluee?:number;
    productnewvalue?:number;
    promotionunit?:string;
    createdate?:Date;
    validfrom?:Date;
    validuntil?:Date;
    maximumorderproducts?: number;
    enabledpromotion?: number;
    promotionbycoupon?:boolean;
    product?:product;


}