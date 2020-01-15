import { ActivatedRoute } from '@angular/router';
import { ServiceLineService } from './../../../services/TelLineManagament/service-line.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  constructor(private serviceS:ServiceLineService,private route: ActivatedRoute) { }
  id;
  collection = { count: null, ListComplaints: [] };
  
config:any;
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
    this.serviceS.getEnabled().subscribe(
      (Data) => {
        this.collection.ListComplaints = Data ; 
        this.collection.count = Data.length;
        console.log("tech"+Data);
      }
     )
     this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.collection.count
    };
    
  }

}
