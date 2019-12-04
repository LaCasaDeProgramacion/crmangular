import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { complaintcomment } from 'src/app/entities/complaintsmanagement/complaintcomment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintCommentsService {
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  get(id:number) : Observable<complaintcomment[]>{
    return this.http.get<complaintcomment[]>("/crmproject-web/rest/comments/get/"+id) ;
  }

  delete(id:number)
  {
    return this.http.delete("/crmproject-web/rest/comments/deleteComment/"+id);
  }

  
  add(t:complaintcomment,id:number)
  {
    return this.http.post("/crmproject-web/rest/comments/addComment/"+t.comment+"/"+id,null,this.headers);

  }
  update(t:complaintcomment,id:number)
  {
    return this.http.put("/crmproject-web/rest/comments/updateComment/"+id,JSON.stringify(t),this.headers);

  }
  Like(id:number)
  {
    return this.http.put("/crmproject-web/rest/comments/likecomment/"+id,null,this.headers);

  }
  getNbLike(id:number) : Observable<number>{
    return this.http.get<number>("/crmproject-web/rest/comments/Getnblike/"+id) ;
  }
}
