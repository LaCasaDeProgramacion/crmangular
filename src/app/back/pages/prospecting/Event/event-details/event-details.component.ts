import { Vehicle } from './../../../../../entities/Vehicle';
import { Location } from '@angular/common';
import { Evenement } from './../../../../../entities/Evenement';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from './../../../../../services/prospectingManagement/event.service';
import { Agent } from 'src/app/entities/Agent';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

 id ;
 event: Evenement={id:0, name:'', endDate:null, startDate:null , Location:{longitude:0, latitude:0} }  ;
 vehicle : Vehicle={registration:'', carmodel:{carbrand:{brand :''} , model:''  }};
 events ;
 assignments;
 vehicles :{registration:'', carmodel:{carbrand:{brand :''} , model:''  }}[] =[] ;

assignementsAgents ;
agent: Agent = {firstName:'', lastName:''};
agents : {firstName:'', lastName:''}[] = [];


  constructor(private route: ActivatedRoute, private router:Router,  private EventService:EventService) {
    //recuerer id
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    })
   this.loadEvents();
   this.loadAffectationVehicles();
   this.loadAffectationAgents()
   if (localStorage['Role']!="ADMIN")
      {
        this.router.navigate(['/home']);

      }

  }
  ngOnInit() {

  }

  loadEvents()
  {
    this.EventService.get().subscribe(
      data => {
        this.events =data;
        this.events.forEach(element => {
          if (element.id == this.id)
            {
              this.event.name = element.name ;
              this.event.startDate = element.startDate;
              this.event.endDate = element.startDate;

              console.log("name ++++++++++++ " + this.event.name)
            }
        });
      }
    );
  }

  loadAffectationVehicles()
  {
    this.EventService.AssignmentVehicule().subscribe(
      data => {
        this.assignments =data;
        this.assignments.forEach(element => {
          if (element.event_vehiculePK.idEvent == this.id)
            {
             this.vehicle.registration = element.vehicule.registration;
             this.vehicle.carmodel.model = element.vehicule.carmodel.model;
             this.vehicle.carmodel.carbrand.brand = element.vehicule.carmodel.carbrand.brand;
             this.vehicles.push(
               {   registration:element.vehicule.registration,
                   carmodel:{
                     carbrand:
                    {brand :element.vehicule.carmodel.carbrand.brand} ,
                    model:element.vehicule.carmodel.model  }
                   });
            }
        });
        this.vehicles.forEach(element => {
          console.log("registration vehicle ******************" + element.registration)
        });

      }
    );


  }

  loadAffectationAgents()
  {
    this.EventService.AssignmentAgent().subscribe(
      data => {
        this.assignementsAgents =data;
        this.assignementsAgents.forEach(element => {
          if (element.event_agentPK.idEvent == this.id)
            {
              console.log("agent  ******************" + element.agent.firstName )
              this.agent.firstName = element.agent.firstName;
              this.agent.lastName =  element.agent.lastName;
             this.agents.push( {firstName:element.agent.firstName, lastName:element.agent.lastName});
            }
        });


      }
    );


  }
}
