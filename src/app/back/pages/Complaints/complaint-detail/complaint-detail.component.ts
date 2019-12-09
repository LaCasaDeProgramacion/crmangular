import { complaintstate } from './../../../../entities/complaintsmanagement/complaintstate';
import { complaints } from './../../../../entities/complaintsmanagement/complaints';
import { ComplaintsService } from './../../../../services/complaintsManagement/complaints.service';
import { Component, OnInit } from '@angular/core';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { ActivatedRoute } from '@angular/router';
import { complaintcomment } from 'src/app/entities/complaintsmanagement/complaintcomment';
import { ComplaintCommentsService } from 'src/app/services/complaintsManagement/complaint-comments.service';
import { ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.component.html',
  styleUrls: ['./complaint-detail.component.scss'],
  

})
export class ComplaintDetailComponent implements OnInit {

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
    console.log(this.user);
    
  }
  onSubmit(id:number)
  {
    this.commentS.add(this.comments,id).subscribe(
      (data)=>
      {
        this.load();
        console.log(this.commentS);
        this.toastr.success('Add comment', 'comment added with success!',
        {timeOut: 2000});
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
  Likecomment(id)
  {
    this.commentS.Like(id).subscribe(
      (data)=>
      {
        this.load();
        this.toastr.success('Like comment', 'Comment liked with success!',
        {timeOut: 2000});
      console.log(data)
    }
    );
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
  CloseComplaint(id){
    this.service.TreatComplaint(id,"Closed_without_Solution").subscribe(
      (data)=>
      {
        this.load();
        this.toastr.success('Close complaint', 'Complaint closed with success!',
        {timeOut: 2000});
        console.log(data);
      }
    )
  }
  Treat(id){
    this.service.TreatComplaint(id,"treated").subscribe(
      (data)=>
      {
        this.load();
        this.toastr.success('Treat complaint', 'Complaint treated with success!',
        {timeOut: 2000});
        console.log(data);
      }
    )
  }


}
