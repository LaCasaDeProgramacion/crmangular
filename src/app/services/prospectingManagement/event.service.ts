import { Event_vehicule } from './../../entities/event_vehicule';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Evenement } from 'src/app/entities/Evenement';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url = '/crmproject-web/rest/event/';
  constructor(private http:HttpClient, private router:Router) { }
  get()
  {
    return this.http.get(this.url + "all");
  }
  add( event: Evenement) {
    return this.http.post<Evenement>(this.url+ "add?name="+ event.name +"&startDate="+event.startDate+
    "&endDate="+event.endDate+"&latitude="+event.Location.latitude+"&longitude="+event.Location.longitude+"", null);
  }
 Delete(id){

   return this.http.delete<Evenement>(this.url + 'delete?id=' + id , null );
 }
 update (event: Evenement, id)
 {
   return this.http.put<Evenement>(this.url+"update?name="+event.name+"&startDate="+event.startDate+
   "&endDate="+event.endDate+"&longitude="
   +event.Location.longitude+"&latitude="+event.Location.latitude+
   "&launched="+event.launched+"&id="+ id , null)
 }

 AssignmentVehicule()
 {
  return this.http.get<Event_vehicule>(this.url + "AssignmentVehicule");
 }

 AssignmentAgent()
 {
  return this.http.get<Event_vehicule>(this.url + "AssignmentAgent");

 }

proposition()
{
  return this.http.get<Evenement>(this.url + "proposition");
}

accepter( id)
{
    this.http.put<Evenement>(this.url+"replyRequestEvent?resp=true&idEvent="+id, null )
}
refuser (id)
{
  console.log("id *********** " +id)
  this.http.put<Evenement>(this.url+"replyRequestEvent?resp=false&idEvent="+id, null )

}

}
