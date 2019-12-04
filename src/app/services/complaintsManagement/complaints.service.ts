import { complaints } from './../../entities/complaintsmanagement/complaints';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplaintsComponent } from 'src/app/back/pages/Complaints/Complaints/complaints.component';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  constructor( private http:HttpClient) { 
  }
  
  get() : Observable<complaints[]>{
    return this.http.get<complaints[]>("/crmproject-web/rest/complaints/all") ;
  }

  delete(id:number)
  {
    return this.http.delete("/crmproject-web/rest/complaints/delete/"+id);
  }
  add(c:complaints) {
    return this.http.post("/crmproject-web/rest/complaints/add/"+c.complaintBody+"/"+c.complaintObject,null,this.headers) ;
  }
  update(c:complaints,id:number) {
    return this.http.post("/crmproject-web/rest/complaints/update/"+id+"/"+c.complaintBody+"/"+c.complaintObject,null,this.headers) ;
  }
  myComplaint() : Observable<complaints[]>{
    return this.http.get<complaints[]>("/crmproject-web/rest/complaints/mycomplaints") ;
  }

  getById(id:number) : Observable<complaints>
  {
    return this.http.get<complaints>("/crmproject-web/rest/complaints/complaintbyid/"+id);
  }
  getByUser(id:number) : Observable<complaints[]>
  {
    return this.http.get<complaints[]>("/crmproject-web/rest/complaints/complaintsuser/"+id);
  }
  getByState(state:string) : Observable<complaints[]>
  {
    return this.http.get<complaints[]>("/crmproject-web/rest/complaints/complaintsbystate/"+state);
  }
  getByType(id:number) : Observable<complaints[]>
  {
    return this.http.get<complaints[]>("/crmproject-web/rest/complaints/complaintsbytype/"+id);
  }
  getByDateAsc(id:number) : Observable<complaints[]>
  {
    return this.http.get<complaints[]>("/crmproject-web/rest/complaints/complaintsbydateA");
  }
  getByDateDesc(id:number) : Observable<complaints[]>
  {
    return this.http.get<complaints[]>("/crmproject-web/rest/complaints/complaintsbydateD");
  }
  TreatComplaint(id:number,state:string) 
  {
    return this.http.put("/crmproject-web/rest/complaints/treatcomplaint/"+id+"/"+state,null,this.headers);
  }
  AffectTechnician(id:number) 
  {
    return this.http.put("/crmproject-web/rest/complaints/affectTechnician/"+id,null,this.headers);
  }

  
  

}
