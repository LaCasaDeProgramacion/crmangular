import { EventService } from './../../services/prospectingManagement/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-front',
  templateUrl: './events-front.component.html',
  styleUrls: ['./events-front.component.scss']
})
export class EventsFrontComponent implements OnInit {

  events;
  constructor(private service: EventService) {
      this.loadEvents();
  }

  loadEvents()
  {
    this.service.get().subscribe(data=>
      {
        this.events= data ;
      })
  }
  ngOnInit() {
  }

}
