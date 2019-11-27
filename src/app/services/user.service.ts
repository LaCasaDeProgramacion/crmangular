import { User } from './../entities/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '/crmproject-web/rest/user/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //private headers = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http:HttpClient) { }
  login(username, password)
  {
    return this.http.get(this.url+"authenticate?username="+ username+"&password="+ password);
  }
  Register(user:User)
  {
    return this.http.post<User>(this.url+"add?cin="+user.cin+"&username="+user.username+
                          "&email="+user.email+"&password="+user.password+"&firstName="+user.firstName+"&lastName="+user.lastName+
                          "&role="+user.role+"&dateBirth="+user.dateBirth, this.httpOptions);
  }
  confirm(code, username)
  {
    return this.http.put(this.url+"confirm?code="+code+"&username="+username, this.httpOptions);
  }
  profile()
  {
    return this.http.get(this.url+"profile");


  }
  logout()
  {
      return this.http.put(this.url+ "logout", this.httpOptions);

  }
  resetPass(username)
  {

    return this.http.put(this.url+ "resetPass?username="+username, this.httpOptions);
  }
  UpdatePass(username,newpass )
  {
    console.log("haaaaaaaaaaaaaniiii")
    return this.http.put<User>(this.url+ "updatePass?username=lahbibFiras&newpass=123", this.httpOptions);
  }

  updateCompte(user:User)
  {
    return this.http.put<User>(this.url+ "updateProfil?cin="+user.cin+"&username="+user.username+"&email="
    +user.email+"&password="+user.password+"&firstname="+user.firstName+"&lastname="
    +user.lastName+"&datebirth="+user.dateBirth+"&id="+user.id, this.httpOptions);
  }




}
