import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { complaintcomment } from './../../../entities/complaintsmanagement/complaintcomment';
import { ComplaintCommentsService } from './../../../services/complaintsManagement/complaint-comments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintsService } from './../../../services/complaintsManagement/complaints.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mycomplaint-details',
  templateUrl: './mycomplaint-details.component.html',
  styleUrls: ['./mycomplaint-details.component.scss']
})
export class MycomplaintDetailsComponent implements OnInit {

  constructor(private service:ComplaintsService,private route: ActivatedRoute,private commentS:ComplaintCommentsService,private modalService: NgbModal,private router:Router,private toastr: ToastrService) { }
  id;
  complaint:any;
  comments:complaintcomment={comment:""};
  listComments:complaintcomment[];
  idSelected:number;
  closeResult:string;
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
  Delete(content)
  {
    console.log(this.idSelected);
    this.service.delete(this.idSelected).subscribe(
      (data) =>{
        console.log(data);
        this.modalService.dismissAll();
        this.toastr.error('Delete complaint', 'Your complaint deleted with success!',
        {timeOut: 2000});
        this.router.navigate(["home/mycomplaints"]);
      }
    )
    
    
  }
  deleteComment(id)
  {
    this.commentS.delete(id).subscribe(
      (data)=>
      {
        this.toastr.error('Delete comment', 'Comment deleted with success!',
        {timeOut: 2000});
        this.load();

        console.log(data);
      }
    )
  }

  Open(content,id) {
    this.idSelected=id;
   this.modalService.open(content, {ariaLabelledBy: 'modal-title-notification'}).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
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

}
