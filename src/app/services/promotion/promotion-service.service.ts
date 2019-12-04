import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Promotion } from 'src/app/entities/Promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionServiceService {
  base_path = '/crmproject-web/rest/promotions';
  constructor(private http: HttpClient,public datepipe: DatePipe) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  

  getListAssignedPromotion() {
    return this.http
      .get<Promotion[]>(this.base_path+"/AssignedPromotions")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getListDisabledPromotion(){
    
    return this.http
      .get<Promotion[]>(this.base_path+"/findpromotionNotUsedYet")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  createItem(promotion:Promotion): Observable<Promotion> {

    const params = new HttpParams()
  .set('ptitle', promotion.title)
  .set('ptype', promotion.promotiontype)
  .set('punit',promotion.promotionunit)
  .set('validfrom',this.convertdate(promotion.validfrom))
  .set('validuntil',this.convertdate(promotion.validuntil));
 
     return this.http
     .post<Promotion>(this.base_path +'/addpromotion',this.http.jsonp,{params})
     .pipe(
        retry(1),
        catchError(this.handleError)
      )
   }
  

   AssignProductssToPack(promotionid:number,productid:number){
    console.log("heeereeeee");
    let params = new HttpParams()
    .set('promotionid',promotionid.toString())
     .set('productid',productid.toString()) ;

  return this.http.put(this.base_path+'/assignprodtoprom',{},{params:params}).pipe(
    catchError(this.handleError)
  );


  }
  updatepromotion(promotion,productid){
 
    let params = new HttpParams() .set('productid',productid.toString()) .set('title',promotion.title).set('promotiontype',promotion.promotiontype) .set('promotionunit',promotion.promotionunit) .set('validfrom',this.convertdate(promotion.validfrom)) .set('validuntil',this.convertdate(promotion.validuntil));


return this.http.put(this.base_path+'/updatepromotion/'+promotion.id,{},{params:params}).pipe(catchError(this.handleError));
}

disablepromotion(promotionid){
  return this.http.put(this.base_path+'/disablepromotion?promotionid='+promotionid,{}).pipe(catchError(this.handleError));
 
}
enablepromotion(promotionid){
  return this.http.put(this.base_path+'/enablepromotion?promotionid='+promotionid,{}).pipe(catchError(this.handleError));
 
}
deletepromotion(promotionid){
  return this.http.delete(this.base_path+'/deletepromotion?id='+promotionid).pipe(catchError(this.handleError));
}


  convertdate(date:Date){

    return this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss').toString();
   }
}
