import { Vehicle } from './Vehicle';
export interface Event_vehicule {
  event_vehiculePK ?:{
    idEvent ?:number ;
    idVehicule ?:number ;
  }
  vehicle ?:Vehicle;
  launched ?:boolean ;
}
