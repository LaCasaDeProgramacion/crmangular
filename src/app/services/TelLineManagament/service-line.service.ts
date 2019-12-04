import { ServicesLines } from './../../entities/tellinemanagement/ServicesLines';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLineService {

  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  get() : Observable<ServicesLines[]>{
    return this.http.get<ServicesLines[]>("/crmproject-web/rest/services/all") ;
  }
  getEnabled() : Observable<ServicesLines[]>{
    return this.http.get<ServicesLines[]>("/crmproject-web/rest/services/getserviceenable") ;
  }
  getEnabledC() : Observable<{[key: string]:object;}[]>{
    return this.http.get<{[key: string]:object;}[]>("/crmproject-web/rest/services/getserviceenable") ;
  }

  add(t:ServicesLines)
  {
    return this.http.post("/crmproject-web/rest/services/addService",JSON.stringify(t),this.headers);

  }
  update(t:ServicesLines,id:number)
  {
    return this.http.put("/crmproject-web/rest/services/updateService/"+id,JSON.stringify(t),this.headers);

  }
  DisabledService(id:number)
  {
    return this.http.put("/crmproject-web/rest/services/DisabledService/"+id,null,this.headers);

  }
  Myservice() : Observable<ServicesLines[]>{
    return this.http.get<ServicesLines[]>("/crmproject-web/rest/services/myservice") ;
  }
  getservicebyId(id:number) : Observable<ServicesLines>{
    return this.http.get<ServicesLines>("/crmproject-web/rest/services/getservicebyId/"+id) ;
  }
  getNbServiceUsed(id:number) : Observable<number>{
    return this.http.get<number>("/crmproject-web/rest/services/nbserviceused/"+id) ;
  }

}
