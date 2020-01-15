import { EventService } from './../../../../../services/prospectingManagement/event.service';
import { Agent } from 'src/app/entities/Agent';
import { Contract } from './../../../../../entities/Contract';
import { AgentService } from './../../../../../services/prospectingManagement/agent.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id ;
  contract:Contract={
    id:0, startDate:null, endDate:null, salary:0, comment:'',
    agent :{
              id:0, cin:0, number:0 , firstName:'', lastName:'',
              email:'', dateBirth:null, role:'',
              drivenLicence:null, picture:''}
  }
  events ;
  idAgent;
  closeResult: string;
  closeResult1: string;

  constructor(private route: ActivatedRoute, private service : AgentService,
    private eventService:EventService,private modalService: NgbModal,
              private router: Router) {
              this.route.paramMap.subscribe(params => {
              this.id = params.get("id")
              });

              this.loadContract();
   }

   loadContract()
   {
     this.service.getContractById(this.id).subscribe(data=> {
       this.contract= data ;
     })

   }
   LoadEventsForAgent(idAgent)
   {
     this.eventService.EventsForAgent(idAgent).subscribe(
       data=> {
         this.events= data ;
       }
     )
   }
   private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
   openReser(content) {
    this.idAgent = this.contract.agent.id ;
    this.LoadEventsForAgent(this.idAgent);
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open(content) {

       this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }
  reserver(idEvent , content )
  {
    this.eventService.affecterAgent(idEvent, this.contract.agent.id).subscribe(data=>
      {
        console.log(data),
        this.LoadEventsForAgent(this.contract.agent.id)
      }
        );
    this.LoadEventsForAgent(this.contract.agent.id);
    this.modalService.dismissAll();
    this.open(content)
  }
  ngOnInit() {
  }

  redirection(id)
{
  this.modalService.dismissAll();
  this.router.navigate(['back/details-event/'+id]);
}
}
