import { Contract } from './../../../../../entities/Contract';
import { AgentService } from './../../../../../services/prospectingManagement/agent.service';
import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/entities/Agent';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {

  id ;
  agent : Agent={id:0, cin:0, number:0 , firstName:'', lastName:'',
                 email:'', dateBirth:null, role:'',
                 drivenLicence:null, picture:''};

  contract: Contract={id:0, title:'', startDate:null, endDate:null, comment:'', salary:0,  idAgent:0};

  constructor(private route: ActivatedRoute, private service : AgentService, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    });
    this.loadAgent();
   }
   loadAgent()
   {
     this.service.getById(this.id).subscribe(
      data=> {
        this.agent.picture= data.picture;
        this.agent. firstName = data.firstName;
        this.agent.lastName = data.lastName;
      }
     );
   }

   addContract()
   {
     console.log("*********************")
     this.contract.idAgent= this.id;
     this.service.affectContract(this.contract).subscribe(data=>{
       console.log("affected")
       this.contract.id= data.id;
       this.router.navigate(['back/agents-details/'+this.contract.id]);
     });

   }

  ngOnInit() {
  }

}
