import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsComplaintService {

  constructor(private http:HttpClient) { }
  getTTechnical() : Observable<number>{
    return this.http.get<number>("/crmproject-web/rest/statistics/totalTechnical") ;
  }
  getTFinancial() : Observable<number>{
    return this.http.get<number>("/crmproject-web/rest/statistics/totalFinancial") ;
  }
  getTRelantional() : Observable<number>{
    return this.http.get<number>("/crmproject-web/rest/statistics/totalRelationnal") ;
  }
  getTOpened() : Observable<number>{
    return this.http.get<number>("/crmproject-web/rest/statistics/totalOpened") ;
  }
  getTClosed() : Observable<number>{
    return this.http.get<number>("/crmproject-web/rest/statistics/totalClosed") ;
  }
  getTInProgress() : Observable<number>{
    return this.http.get<number>("/crmproject-web/rest/statistics/totalInprogress") ;
  }
  getTTeated() : Observable<number>{
    return this.http.get<number>("/crmproject-web/rest/statistics/totalTreated") ;
  }
}
