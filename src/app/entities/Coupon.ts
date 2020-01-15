import { Promotion } from "./promotion";

export interface Coupon {
   codecoupon?:string;
   enabledcoupon?:number;
   promotion?:Promotion;
   
}