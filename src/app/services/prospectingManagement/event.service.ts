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
    return this.http.get<Evenement>(this.url + "all");
  }
  add( event: Evenement) {
    return this.http.post<Evenement>(this.url+ "add?name="+ event.name +"&startDate="+event.startDate+
    "&endDate="+event.endDate+"&latitude="+event.Location.latitude+"&longitude="+event.Location.longitude+"", null);
  }
  addCalendar( name, newDate1, newDate2) {
    return this.http.post<Evenement>(this.url+ "add?name="+ name +"&startDate="+newDate1+
    "&endDate="+newDate2+"&latitude=11&longitude=11", null);
  }
 Delete(id){
   console.log("id service ", id)

   return this.http.delete  (this.url + 'delete?id=' + id  );
 }
 update (event: Evenement, id)
 {
   return this.http.put<Evenement>(this.url+"update?name="+event.name+"&startDate="+event.startDate+
   "&endDate="+event.endDate+"&longitude="
   +event.Location.longitude+"&latitude="+event.Location.latitude+
   "&launched="+event.launched+"&id="+ id , null)
 }
 updateCalendar (id, name, startDate, endDate)
 {
   return this.http.put<Evenement>(this.url+"updateCalendar?id="+id+"name="+name+"&startDate="+startDate+
   endDate, null)
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
    return this.http.put<Evenement>(this.url+"replyRequestEvent?resp=true&idEvent="+id, {} )
}
refuser (id)
{
  console.log("id *********** " +id)
 return  this.http.put<Evenement>(this.url+"replyRequestEvent?resp=false&idEvent="+id, {} )

}




EventsForVeh(idVehicule)
{
  return this.http.get(this.url + "EventsForVeh?idVehicule="+ idVehicule);
}

affecterVehicule(idEvent, idVehicule)
{
  console.log("**** SERVICE ")
  console.log(this.url + "reserve?idVehicule="+idVehicule+"&idEvent="+idEvent )
  return this.http.post<Evenement>(this.url+ "reserve?idVehicule="+idVehicule+"&idEvent="+idEvent , null);
}
EventsForAgent(idAgent)
{
  return this.http.get(this.url + "EventsForAgent?idAgent="+ idAgent);
}
affecterAgent(idEvent, idAgent)
{
  console.log("**** SERVICE ")
  console.log(this.url + "reserveAgent?idAgent="+idAgent+"&idEvent="+idEvent )
  return this.http.post<Evenement>(this.url + "reserveAgent?idAgent="+idAgent+"&idEvent="+idEvent, null);
}
recentSuggestion()
{
  return this.http.get<Evenement>(this.url+"recentSuggestion");
}

getEventById(id)
{
  return this.http.get<Evenement>(this.url+"getById?id="+id);

}

}
