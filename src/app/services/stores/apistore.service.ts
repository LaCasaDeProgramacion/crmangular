import { store } from './../../entities/stores';
import { retry, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson } from 'src/app/entities/map';




@Injectable({
  providedIn: 'root'
})
export class ApiStore {
  ListStoress: any = [];
  items: Observable<any[]>;
  itemsRef: any;

  constructor(private http : HttpClient) {
    mapboxgl.accessToken = environment.mapbox.accessToken;


  }






  urlStore = 'http://localhost:9080/crmproject-web/rest/stores/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private headers = new HttpHeaders().set('content-type', 'application/json');
  ngOnInit() {
  }

  getStores() {
    return this.http.get<store[]>(this.urlStore+"allstores") ;
   }
//tekhdem ama WS f JEE moch yekhdem, l ezm nchouf alech :D
  deleteStore(store_id){
    return this.http.delete<store>(this.urlStore+"deleteStore/?id="+store_id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

    // Error handling
    handleError(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }
   /*
   addProduct(product:  product)
   {
     return this.http.post("http://localhost:9080/crmproject-web/rest/products/addProduct",product,{headers: this.headers}) ;
   }
   */
  addStore(store: store){
    return this.http.post<store>("http://localhost:9080/crmproject-web/rest/stores/addStore?store_name=", store);
  }

  createMarker(store) {

    return this.http.post<store>("http://localhost:9080/crmproject-web/rest/stores/addStore?store_name=", store);


  }

  removeMarker(id: number) {
    return this.ListStoress.remove();
  }

}
