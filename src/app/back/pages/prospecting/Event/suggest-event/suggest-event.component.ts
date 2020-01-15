import { element } from 'protractor';
import { Evenement } from 'src/app/entities/Evenement';
import { EventService } from './../../../../../services/prospectingManagement/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/entities/Vehicle';
import { Agent } from 'src/app/entities/Agent';

@Component({
  selector: 'app-suggest-event',
  templateUrl: './suggest-event.component.html',
  styleUrls: ['./suggest-event.component.scss']
})
export class SuggestEventComponent implements OnInit {

  event: Evenement={id:0, name:'', endDate:null, startDate:null , Location:{longitude:0, latitude:0} }  ;
  assignmentsV ;
  vehicle : Vehicle={ registration:'', carmodel:{carbrand:{brand :''} , model:''  }};
  vehicles :{registration:'', carmodel:{carbrand:{brand :''} , model:''  }}[] =[] ;

  assignementsAgents;
  agent: Agent = {firstName:'', lastName:''};
  agents : {firstName:'', lastName:''}[] = [];

  id ;
  constructor(private route: ActivatedRoute, private EventService:EventService, private router:Router) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    });
    this.loadEvent();
    this.loadVehicleAttente();
    this.loadAgentsAttente();

    if (localStorage['Role']!="ADMIN")
    {
      this.router.navigate(['/home']);

    }

   }

  ngOnInit() {
  }

  loadEvent()
  {
    this.EventService.getEventById(this.id).subscribe(
      data => {
        this.event= data ;
      }
    );

  }
  loadVehicleAttente()
  {
    this.EventService.AssignmentVehicule().subscribe(
      data => {
        this.assignmentsV =data;
        this.assignmentsV.forEach(element => {

          if (!element.launched)
            {
              console.log("launcheeed" + element.launched )
              console.log("*********" + element.vehicule.registration)

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


      }
    );


  }

  loadAgentsAttente()
  {
    this.EventService.AssignmentAgent().subscribe(
      data => {
        this.assignementsAgents =data;
        this.assignementsAgents.forEach(element => {
          console.log("assignement agent "+ element.launched)
          if (!element.launched)
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

  accepter ()
  {
    this.EventService.accepter( this.event.id)
      .subscribe(arg => {console.log(arg);
        this.loadEvent();
        this.router.navigate(['back/events']);});
  }
  refuser()
  {
    this.EventService.refuser( this.event.id).subscribe(arg => {console.log(arg);
      this.loadEvent();
      this.router.navigate(['back/events']);
    });
    console.log("refused" + this.event.id )
  }

}
