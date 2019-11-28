import { complaints } from './../../entities/complaintsmanagement/complaints';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  
  constructor( private http:HttpClient) { 
  }
  
  get() : Observable<complaints[]>{
    return this.http.get<complaints[]>("/crmproject-web/rest/complaints/all") ;
  }

  delete(id:number)
  {
    return this.http.delete("/crmproject-web/rest/complaints/delete/"+id);
  }

  getById(id:number) : Observable<complaints>
  {
    return this.http.get<complaints>("/crmproject-web/rest/complaints/complaintbyid/"+id);
  }

  
  

}
