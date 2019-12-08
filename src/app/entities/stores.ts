export class store{
  store_id : number ;
  store_name : string ;
  store_longitude : any ;
  store_latitude : any ;
  store_image:string;
  store_city : string;
  start : string = new Date().toISOString();
  end : string = new Date().toISOString();
distance:number;


  constructor(){

  }

}
