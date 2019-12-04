import { Carmodel } from "./carmodel";

export interface Vehicle {
  id ?:number;
  registration ?:string;
  color ?:string;
  picture ?:string;
  carmodel ?:Carmodel;
}
