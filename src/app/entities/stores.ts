export class store{
  store_id : number ;
  store_name : string ;
  store_longitude : any ;
  store_latitude : any ;
  store_city : string;
  start : number ;
  end : number ;


    constructor(store_name , store_longitude , store_latitude , store_city , start,end){
      this.store_name = store_name ;
      this.store_longitude = store_longitude ;
      this.store_latitude= store_latitude ;
      this.store_city=store_city ;
      this.start = start ;
      this.end = end ;


  }

}
