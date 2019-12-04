import { ComplaintCommentsService } from './../../../services/complaintsManagement/complaint-comments.service';
import { ActivatedRoute } from '@angular/router';
import { ComplaintsService } from './../../../services/complaintsManagement/complaints.service';
import { complaintcomment } from './../../../entities/complaintsmanagement/complaintcomment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.scss']
})
export class ComplaintDetailsComponent implements OnInit {

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
  

}
