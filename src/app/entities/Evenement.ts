import { Location } from '@angular/common';
export interface Evenement {
  id ?:number;
  name ?:string ;
  startDate ?: Date;
  endDate ?: Date ;
  Location ?: {
    latitude ?: number ,
    longitude ?: number }

  launched ?:boolean;

}
