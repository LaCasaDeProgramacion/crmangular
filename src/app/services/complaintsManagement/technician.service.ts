import { technician } from './../../entities/complaintsmanagement/technician';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
  constructor(private http:HttpClient) { }
  get() : Observable<technician[]>{
    return this.http.get<technician[]>("/crmproject-web/rest/technician/all") ;
  }

  delete(id:number)
  {
    return this.http.delete("/crmproject-web/rest/technician/deletetechnician/"+id);
  }

  
  add(t:technician)
  {
    return this.http.post("/crmproject-web/rest/technician/add/",JSON.stringify(t),this.headers);

  }
  update(id:number,t:technician)
  {
    return this.http.put("/crmproject-web/rest/technician/updatetechnician/"+id,JSON.stringify(t),this.headers);

  }
  
}
