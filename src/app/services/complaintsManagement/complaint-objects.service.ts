import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { complaintobject } from 'src/app/entities/complaintsmanagement/complaintobject';

@Injectable({
  providedIn: 'root'
})
export class ComplaintObjectsService {
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  get() : Observable<complaintobject[]>{
    return this.http.get<complaintobject[]>("/crmproject-web/rest/objectcomplaint/all") ;
  }

  delete(id:number)
  {
    return this.http.delete("/crmproject-web/rest/objectcomplaint/deletetype/"+id);
  }

  
  add(t:complaintobject)
  {
    return this.http.post("/crmproject-web/rest/objectcomplaint/add/",JSON.stringify(t),this.headers);

  }
 
  GetObjectsByType(idType:number)
  {
    return this.http.get("/crmproject-web/rest/objectcomplaint/objectsbytype/"+idType);

  }
}
