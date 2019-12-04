import { complaintstate } from './../../../../entities/complaintsmanagement/complaintstate';
import { complaints } from './../../../../entities/complaintsmanagement/complaints';
import { ComplaintsService } from './../../../../services/complaintsManagement/complaints.service';
import { Component, OnInit } from '@angular/core';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { ActivatedRoute } from '@angular/router';
import { complaintcomment } from 'src/app/entities/complaintsmanagement/complaintcomment';
import { ComplaintCommentsService } from 'src/app/services/complaintsManagement/complaint-comments.service';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.component.html',
  styleUrls: ['./complaint-detail.component.scss']
})
export class ComplaintDetailComponent implements OnInit {

  constructor(private service:ComplaintsService,private route: ActivatedRoute,private commentS:ComplaintCommentsService) { }
  id;
  complaint:any;
  comments:complaintcomment={comment:""};
  listComments:complaintcomment[];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      
      this.id=this.route.snapshot.params.id;
      console.log(this.id);
    });
    this.service.getById(this.id).subscribe(
      (data)=>{
        this.complaint= data;
      }
    )
    
  }
  onSubmit(id:number)
  {
    this.commentS.add(this.comments,id).subscribe(
      (data)=>
      {
        this.load();
        console.log(this.commentS);
        this.comments={comment:""};
      }
    )
  }
  load()
  {
    this.service.getById(this.id).subscribe(
      (data)=>{
        this.complaint= data;
      }
    )
  }
  CloseComplaint(id){
    this.service.TreatComplaint(id,"Closed_without_Solution").subscribe(
      (data)=>
      {
        this.load();
        console.log(data);
      }
    )
  }
  Treat(id){
    this.service.TreatComplaint(id,"treated").subscribe(
      (data)=>
      {
        this.load();
        console.log(data);
      }
    )
  }


}
