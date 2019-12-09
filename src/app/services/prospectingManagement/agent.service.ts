import { Contract } from './../../entities/Contract';
import { Agent } from 'src/app/entities/Agent';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http:HttpClient, private router:Router, public datepipe: DatePipe) { }

  url = '/crmproject-web/rest/agent/';
  urlContract = '/crmproject-web/rest/contract/';
  get()
  {
    return this.http.get<Agent>(this.url + "all");
  }
  getById(id)
  {
    return this.http.get<Agent>(this.url + "getById/?id="+id);
  }
  add( a: Agent) {
    return this.http.post<Agent>(this.url+ "add?cin="+a.cin+"&number="+a.Number
    +"&firstName="+a.firstName+"&lastName="+a.lastName+
    "&email="+a.email+"&datebirth="+this.convertdate(a.dateBirth)+"&role="+a.role
    +"&accessPerm=true"+"&drivenLicence="+a.drivenLicence+"&picture="+a.picture, null);
  }
 Delete(id){

   return this.http.delete<Agent>(this.url + 'delete?id=' + id , null );
 }
 update (a: Agent, id)
 {
   return this.http.put<Agent>(this.url+ "update?id="+id+"&cin="+a.cin
   +"&number="+a.Number
   +"&firstName="+a.firstName+"&lastName="+a.lastName+
   "&email="+a.email+"&datebirth="+this.convertdate(a.dateBirth)+"&role="+a.role
   +"&accessPerm=true"+"&drivenLicence="+a.drivenLicence+"&picture="+a.picture , null)
 }

 convertdate(date:Date){

  return this.datepipe.transform(date, 'yyyy-MM-dd').toString();
 }

 affectContract(c:Contract)
 {
      return this.http.post<Contract>(this.urlContract+"add?title="+c.title+"&startDate="
      +this.convertdate(c.startDate)+"&endDate="+this.convertdate(c.endDate)+"&salary="+c.salary+
      "&comment="+c.comment+"&status=started&idAgent="+c.idAgent, null);
 }

 getContractById(id)
 {
   return this.http.get(this.urlContract+"getById?id="+id );
 }
 getIdContrat(idAgent)
 {
  return this.http.get(this.url+"getIdContrat?id="+idAgent );
 }


}
