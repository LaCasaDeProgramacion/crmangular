import { ServiceLineService } from './../../../../services/TelLineManagament/service-line.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serviceline-detail',
  templateUrl: './serviceline-detail.component.html',
  styleUrls: ['./serviceline-detail.component.scss']
})
export class ServicelineDetailComponent implements OnInit {

  constructor(private serviceS:ServiceLineService,private route: ActivatedRoute) { }
  id;
  service:any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      
      this.id=this.route.snapshot.params.id;
      console.log(this.id);
    });
    this.serviceS.getservicebyId(this.id).subscribe(
      (data)=>{
        this.service= data;
      }
    )
    
  }
  

}
