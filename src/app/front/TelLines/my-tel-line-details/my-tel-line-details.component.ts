import { TellineService } from './../../../services/TelLineManagament/telline.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceLineService } from './../../../services/TelLineManagament/service-line.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tel-line-details',
  templateUrl: './my-tel-line-details.component.html',
  styleUrls: ['./my-tel-line-details.component.scss']
})
export class MyTelLineDetailsComponent implements OnInit {

  constructor(private serviceS:TellineService,private route: ActivatedRoute) { }
  id;
  service:any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      
      this.id=this.route.snapshot.params.id;
      console.log(this.id);
    });
    this.serviceS.getTellinebyid(this.id).subscribe(
      (data)=>{
        this.service= data;
      }
    )
    
  }

}
