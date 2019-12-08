import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { product } from "src/app/entities/product";





@Injectable()
export class ChartService {

  constructor(private http : HttpClient) { }
  urlProduct = 'http://localhost:9080/crmproject-web/rest/products/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProducts()  {
    return this.http.get<product[]>(this.urlProduct+"allproducts") ;
   }

  // Used for realtime data updates


}
