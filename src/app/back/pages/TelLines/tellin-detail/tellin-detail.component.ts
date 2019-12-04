import { TellineService } from './../../../../services/TelLineManagament/telline.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tellin-detail',
  templateUrl: './tellin-detail.component.html',
  styleUrls: ['./tellin-detail.component.scss']
})
export class TellinDetailComponent implements OnInit {

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
