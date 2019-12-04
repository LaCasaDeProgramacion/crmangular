import { TelephoneLines } from './../../entities/tellinemanagement/TelephoneLines';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TellineService {

  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  get() : Observable<TelephoneLines[]>{
    return this.http.get<TelephoneLines[]>("/crmproject-web/rest/telephonelines/all") ;
  }
  getTellinesByState(state:number) : Observable<TelephoneLines[]>{
    return this.http.get<TelephoneLines[]>("/crmproject-web/rest/services/TellinesByState/"+state) ;
  }

  
  add(t:TelephoneLines)
  {
    return this.http.post("/crmproject-web/rest/telephonelines/add/"+t.lineNumber+"/"+t.codePIN+"/"+t.codePUK+"/"+t.services+"/"+2,null,this.headers);

  }
  delete(id:number)
  {
    return this.http.delete("/crmproject-web/rest/telephonelines/delete/"+id);

  }
  update(t:TelephoneLines,id:number)
  {
    return this.http.put("/crmproject-web/rest/telephonelines/update/"+id+"/"+t.lineNumber+"/"+t.codePIN+"/"+t.codePUK+"/"+2,null,this.headers);

  }
  affectservice(idtel:number,idS:number)
  {
    return this.http.put("/crmproject-web/rest/telephonelines/affectservice/"+idtel+"/"+idS,null,this.headers);

  }
  MyTelline() : Observable<TelephoneLines[]>{
    return this.http.get<TelephoneLines[]>("/crmproject-web/rest/telephonelines/myTellines") ;
  }
  changelinestate(idtel:number,state:number)
  {
    return this.http.put("/crmproject-web/rest/telephonelines/changelinestate/"+idtel+"/"+state,null,this.headers);

  }
  changelinestate2(idtel:number)
  {
    return this.http.put("/crmproject-web/rest/telephonelines/affectservice/"+idtel,null,this.headers);

  }
  getTellinebyid(id:number) : Observable<TelephoneLines>{
    return this.http.get<TelephoneLines>("/crmproject-web/rest/telephonelines/getTellinebyid/"+id) ;
  }
  nblinebyperiod(id:number) : Observable<number>{
    return this.http.get<number>("/crmproject-web/rest/telephonelines/nblinebyperiod/"+id) ;
  }
}
