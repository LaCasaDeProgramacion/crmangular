import { store } from './../../entities/stores';
import { category } from './../../entities/category';
import { retry, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { product } from 'src/app/entities/product';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sto: store = new store();
product:product [];
  constructor(private http : HttpClient) { }
  urlProduct = 'http://localhost:9080/crmproject-web/rest/products/';
  urlCategory='http://localhost:9080/crmproject-web/rest/categories/';
  base_path='http://localhost:9080/crmproject-web/rest/coupon';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  httpOptionss = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'

    })
  }
  private headers = new HttpHeaders().set('content-type', 'application/json');
  ngOnInit() {
  }

  getProducts()  {
    return this.http.get<product[]>(this.urlProduct+"allproducts") ;
   }

   getInactiveProducts()  {
    return this.http.get<product[]>(this.urlProduct+"allinactiveproducts") ;
   }
   getTopViewedProducts()  {
    return this.http.get<product[]>(this.urlProduct+"TopviewedProducts") ;
   }
  deleteProduct(id){
    return this.http.delete<product>(this.urlProduct+"deleteProduct/?id="+id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  deleteCategory(category_id){
    return this.http.delete<category>(this.urlCategory+"deleteCategory/?category_id="+category_id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  public findProducts(productName): Observable<any> {
    return this.http.get<product>(this.urlProduct+"search/?productName="+productName, this.httpOptions)

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
  addProduct(p: product): Observable<product>{
    return this.http.post<product>(this.urlProduct+"addProduct/?productName="+p.productName+"&productImage="+p.productImage+"&productDescription="+p.productDescription+"&productQuantity=22&productPrice="+p.productPrice+"&productStatus=active&category_id="+p.category_id+"&store_id="+p.store_id,null).pipe(

      retry(1),
    catchError(this.handleError)

  );

  }

   public getCategories(){
return this.http.get<category[]>(this.urlCategory+"allcategories") ;
  }

  public addCategory(c: category){
    return this.http.post<category>(this.urlCategory+"addCategory/?category_name="+c.category_name,null).pipe(

      retry(1),
    catchError(this.handleError)

  );
      }
   getRandomProduct() {
    return this.http.get<product[]>(this.urlProduct+"getrandompro") ;
   }
   setnbviews(product: product): Observable<product>{
    return this.http.post<product>(this.urlProduct+"numberofViews", null);
  }
  public findProductbyId(id): Observable<any> {
    return this.http.get<product>(this.urlProduct+"getprobyId/?id="+id, this.httpOptions)

    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  public findCategorybyId(category_id): Observable<any> {
    return this.http.get<category>(this.urlCategory+"getcategorybyId/?category_id="+category_id, this.httpOptions)

    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  AssignProductssToPack(){
    console.log("heeereeeee");


  return this.http.put(this.base_path+'/assigncoupontopromotion', null,this.httpOptionss).pipe(
    retry(2),
    catchError(this.handleError)
  );
}
getCouponByuser(){
  return this.http.get(this.base_path+"/getCouponByUser", this.httpOptionss)

    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}
gettimeCouponavailable(){
  return this.http.get(this.base_path+"/HourMinuteSecondLeftToUseCoupon", this.httpOptionss)

  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

updatePro(id, p): Observable<product> {
  return this.http.put<product>(this.urlProduct +
    "updateProduct?id="+id+"&productName="+p.productName+"&ProductDescription="+p.productDescription+
  "&ProductQuantity="+p.productQuantity+"&ProductPrice="+p.productPrice+"&productStatus="+p.productStatus+
  "&category_id="+p.category.category_id+"&store_id="+p.store.store_id,null).pipe(
    retry(1),
    catchError(this.handleError)
  )
}
updateCategory(category_id, c): Observable<category> {
  return this.http.put<category>(this.urlCategory +
    "updateCategory?category_id="+category_id+"&category_name="+c.category_name,null).pipe(
    retry(1),
    catchError(this.handleError)
  )
}
numberOfViews(id): Observable<product> {
  return this.http.post<product>(this.urlProduct +"numberofViews?id="+id,null).pipe(
    retry(1),
    catchError(this.handleError)
  )
}

getTopSellingProducts(): Promise<product[]> {
  return Promise.resolve(this.product);
}

SetToActive(id): Observable<product> {
  return this.http.post<product>(this.urlProduct +"setToActive?id="+id,null).pipe(
    retry(1),
    catchError(this.handleError)
  )
}


}
