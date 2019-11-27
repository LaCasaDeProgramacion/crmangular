import { retry, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { product } from 'src/app/entities/product';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  urlProduct = 'http://localhost:9080/crmproject-web/rest/products/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private headers = new HttpHeaders().set('content-type', 'application/json');
  ngOnInit() {
  }

  getProducts() {
    return this.http.get<product[]>(this.urlProduct+"allproducts") ;
   }
//tekhdem ama WS f JEE moch yekhdem, l ezm nchouf alech :D
  deleteProduct(id){
    return this.http.delete<product>(this.urlProduct+"deleteProduct/?id="+id, this.httpOptions)
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
  addProduct(product: product): Observable<product>{
    return this.http.post<product>(`http://localhost:9080/crmproject-web/rest/products/addProduct`, product);
  }
}
