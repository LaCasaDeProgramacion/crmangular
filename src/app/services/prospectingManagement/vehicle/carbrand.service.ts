import { Vehicle } from './../../../entities/Vehicle';
import { Carmodel } from './../../../entities/carmodel';
import { CarbrandComponent } from './../../../back/pages/prospecting/vehicle/carbrand/carbrand.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Carbrand } from 'src/app/entities/carbrand';

@Injectable({
  providedIn: 'root'
})
export class CarbrandService {

  url = '/crmproject-web/rest/brand/';
  urlModel = '/crmproject-web/rest/model/';
  urlVehicle = '/crmproject-web/rest/vehicule/';

  constructor(private http:HttpClient, private router:Router) { }
  getBrands()
  {
    return this.http.get(this.url + "all");
  }
  getBrandById(id)
  {
    const params = new HttpParams().set('id', id);
    return this.http.get(this.url + 'byid?id='+ id   );
  }
  addBrand(carbrand: string) {
     return this.http.post<Carbrand>(this.url+ 'add/' + carbrand, null);

  }
  DeleteBrand(id){
    console.log("l'id est ", id)
    const params = new HttpParams().set('id', id);
    return this.http.delete<Carbrand>(this.url + 'delete/' , {params});
  }
  updateBrand (brand, id)
  {
    const params = new HttpParams()
                        .set('id',id)
                        .set('name',brand);
    return this.http.put<Carbrand>(this.url+'update', null, {params});
  }
  /* ******************* CARModel ******************* */

  getModels()
  {
    return this.http.get(this.urlModel + "all");
  }
  addModel(model: Carmodel) {
    return this.http.post<Carmodel>(this.urlModel+ 'add?model='+model.model
                                    +'&idBrand='+model.carbrand.id, null);
  }
 DeleteModel(id){
   console.log("l'id est ", id)
   const params = new HttpParams().set('id', id);
   return this.http.delete<Carmodel>(this.urlModel + 'delete/' , {params});
 }
 updateModel (model, id)
 {
   return this.http.put<Carbrand>(this.urlModel+'update?model='+model+'+&id='+id, null);
 }
 /* ******************* VEHICLE ******************* */

 getVehicles()
 {
   return this.http.get(this.urlVehicle + "all");
 }
 addVehicle(v: Vehicle) {
   return this.http.post<Vehicle>(this.urlVehicle+"add?registration="+v.registration+
   "&color="+v.color+"&picture="+v.picture+"&idModel="+v.carmodel.id, null);
 }
DeleteVehicle(id){

  //const params = new HttpParams().set('id', id);
  return this.http.delete<Vehicle>(this.urlVehicle + 'delete?id=' + id);
}
updateVehicle (v:Vehicle)
{
  return this.http.put<Vehicle>(this.urlVehicle+
    "update?registration="+v.registration+"&color="+v.color
    +"&picture="+v.picture+"&idModel="+v.carmodel.id+"&id="+v.id, null);
}

}
