import { Agent } from 'src/app/entities/Agent';
import { AgentService } from './../../../../../services/prospectingManagement/agent.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private service:AgentService,
    private router: Router) { }
    searchText;
    idContract;
    agent: Agent={
      id:0, cin:0, number:0 , firstName:'', lastName:'',
      email:'', dateBirth:null, role:'',
      drivenLicence:null, picture:''};


      closeResult: string;
      closeResult1: string;
      agenttodelete:Agent={
                          id:0, cin:0, number:0 , firstName:'', lastName:'',
                          email:'', dateBirth:null, role:'',
                          drivenLicence:null, picture:''
                        };

      collection = { count: null, agents:null  };
      config:any;

  ngOnInit() {
    this.loadAgents();

  }

  loadAgents()
  {
     this.service.get().subscribe(
       data => {
        this.collection.agents = data ;

       }
     );
     this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  loadIdContract(id)
  {
     this.service.getIdContrat(id).subscribe(data=> {
      this.idContract= data;
      console.log("*********** ID CONTRAT" + this.idContract )
      this.router.navigate(['back/agents-details/'+this.idContract]);
     });
  }
  viewDetails(e, id)
  {
    console.log("*********** ID AGENT" + id )
    this.loadIdContract(id);


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
  openarchive(content,id) {
    console.log("agent archive "+ id )

    this.agenttodelete=id;
       this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }
  delete()
  {
    console.log("agent to delete " + this.agenttodelete)
    this.service.Delete(this.agenttodelete).subscribe(
     response=>
     {
      this.loadAgents();
      this.modalService.dismissAll();
     }
    );

  }

  pageChanged(event){
    this.config.currentPage = event;
  }



}
