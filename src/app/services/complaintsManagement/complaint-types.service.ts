import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { complainttype } from 'src/app/entities/complaintsmanagement/complaintstype';

@Injectable({
  providedIn: 'root'
})
export class ComplaintTypesService {
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  get() : Observable<complainttype[]>{
    return this.http.get<complainttype[]>("/crmproject-web/rest/typecomplaint/all") ;
  }

  delete(id:number)
  {
    return this.http.delete("/crmproject-web/rest/typecomplaint/delete/"+id);
  }

  
  add(c:complainttype)
  {
    return this.http.post("/crmproject-web/rest/typecomplaint/add/",JSON.stringify(c),this.headers);

  }
}
