import { product } from "./product";
import { ProductsPack } from "./ProductsPack";

export interface Pack{
    id?:number;
    archivestatus?:boolean;
    createdate?:Date;
    description?:string;
    integratedprice?:number;
    integratedquantity?:number;
    picture?:string;
    title?:string;
    validfrom?:Date;
    validuntil?:Date;
    productsPack?:ProductsPack[];
    products?:product[];
    avgRatingpack?:any;
}