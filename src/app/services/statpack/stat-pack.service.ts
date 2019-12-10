import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { StatPack } from 'src/app/entities/StatPack';

@Injectable({
  providedIn: 'root'
})
export class StatPackService {
  base_path = '/crmproject-web/rest/packs';
  constructor(private http: HttpClient) { }
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

  getallStatPack(): Observable<StatPack> {
    return this.http
      .get<StatPack>(this.base_path+"/allStatPack")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getmostgainmoneystatpack(): Observable<StatPack> {
    return this.http
      .get<StatPack>(this.base_path+"/mostgainmoneystatpack")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getSelledQuantitypacktoday(): Observable<StatPack> {
    return this.http
      .get<StatPack>(this.base_path+"/SelledQuantitypacktoday")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getBestpackforToday(): Observable<StatPack> {
    return this.http
      .get<StatPack>(this.base_path+"/BestpackforToday")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getPackoftheMonth(): Observable<StatPack> {
    return this.http
      .get<StatPack>(this.base_path+"/PackoftheMonth")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getjsonStatPackByEverething(month,year,titlestat): Observable<StatPack> {
    return this.http
      .get<StatPack>(this.base_path+"/jsonStatPackByEverething?month="+month+"&year="+year+"&TitleStat="+titlestat)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getjsonStatPackByTitle(title) : Observable<StatPack> {
    
    return this.http
    .get<StatPack>(this.base_path+"/jsonStatPackByTitle?TitleStat="+title)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }


}
