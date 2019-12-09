import { ComplaintCommentsService } from './../../../services/complaintsManagement/complaint-comments.service';
import { ActivatedRoute } from '@angular/router';
import { ComplaintsService } from './../../../services/complaintsManagement/complaints.service';
import { complaintcomment } from './../../../entities/complaintsmanagement/complaintcomment';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.scss']
})
export class ComplaintDetailsComponent implements OnInit {

  constructor(private service:ComplaintsService,private route: ActivatedRoute,private commentS:ComplaintCommentsService,private toastr: ToastrService) { }
  id;
  complaint:any;
  comments:complaintcomment={comment:""};
  listComments:complaintcomment[];
  user=localStorage.getItem('UserName');

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
  deleteComment(id)
  {
    this.commentS.delete(id).subscribe(
      (data)=>
      {
        this.load();
        this.toastr.error('Delete comment', 'Comment deleted with success!',
        {timeOut: 2000});
        console.log(data);
      }
    )
  }
  Likecomment(id)
  {
    this.commentS.Like(id).subscribe(
      (data)=>
      {
        this.load();
      console.log(data)
    }
    );
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
