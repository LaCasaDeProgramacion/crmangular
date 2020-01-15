import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pack } from 'src/app/entities/Pack';
import { DatePipe } from '@angular/common';
import { stringify } from 'querystring';
import { product } from 'src/app/entities/product';


@Injectable({
  providedIn: 'root'
})
export class PackService {

  base_path = '/crmproject-web/rest/packs';
  constructor(private http: HttpClient,public datepipe: DatePipe) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
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
  getListavailablepacks(): Observable<Pack> {
    return this.http
      .get<Pack>(this.base_path+"/availablepacks",this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  
  createItem(pack:Pack): Observable<Pack> {

    const params = new HttpParams()
  .set('title', pack.title)
  .set('description', pack.description)
  .set('picture',pack.picture)
  .set('validfrom',this.convertdate(pack.validfrom))
  .set('validuntil',this.convertdate(pack.validuntil));
  console.log(params);
     return this.http
     .post<Pack>(this.base_path +'/addpack',this.http.jsonp,{params})
     .pipe(
        retry(2),
        catchError(this.handleError)
      )
      
  }
  AssignProductssToPack(packid:number,productid:number[]){
    console.log("heeereeeee");
    let params = new HttpParams().set('packid',packid.toString());

productid.forEach((id:number) =>{
  params = params.append(`products`, id.toString());
 
});
console.log(params);
  return this.http.put(this.base_path+'/assignproductstopack',{},{params:params}).pipe(
    catchError(this.handleError)
  );


  }
  getstatbytitle(title){
    
    return this.http
    .get<product>(this.base_path+"/jsonStatPackByTitle?TitleStat="+title)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getprodbyid(id){
    return this.http
      .get<product>(this.base_path+"/getprodbyid?id="+id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getproductsbypackid(id){
    return this.http
    .get(this.base_path+"/findproductsPack?packid="+id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  updatepack(pack,productid){
 
    let params = new HttpParams() .set('id',pack.id.toString()) .set('title',pack.title).set('description',pack.description) .set('picture',pack.picture) .set('validfrom',this.convertdate(pack.validfrom)) .set('validuntil',this.convertdate(pack.validuntil));

productid.forEach((id:number) =>{ params = params.append(`products`, id.toString()); });
return this.http.put(this.base_path+'/updatePack',{},{params:params}).pipe(catchError(this.handleError));
}

getarchivedlist(){
  return this.http.get(this.base_path+"/packsarchived").pipe( retry(2), catchError(this.handleError))
}

archivepack(packid){
  return this.http.put(this.base_path+'/archivepack?packid='+packid,{}).pipe(catchError(this.handleError));
 
}
unarchivingpack(packid){
  return this.http.put(this.base_path+'/unarchivingpack?packid='+packid,{}).pipe(catchError(this.handleError));
}
deletepack(packid){
  return this.http.delete(this.base_path+'/deletepack?id='+packid).pipe(catchError(this.handleError));
}




  convertdate(date:Date){

    return this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss').toString();
   }

}
