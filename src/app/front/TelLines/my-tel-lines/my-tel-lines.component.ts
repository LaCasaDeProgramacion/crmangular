import { TelephoneLines } from './../../../entities/tellinemanagement/TelephoneLines';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './../../../services/user.service';
import { TellineService } from './../../../services/TelLineManagament/telline.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-tel-lines',
  templateUrl: './my-tel-lines.component.html',
  styleUrls: ['./my-tel-lines.component.scss']
})
export class MyTelLinesComponent implements OnInit {

  constructor(private techservice:TellineService,private userser:UserService,private modalService: NgbModal,private toastr: ToastrService) { }
  Listtel=[];
  cancelClicked:boolean=false;
  Selectedtel:TelephoneLines;
  idSelected:number;
  searchText;
  closeResult: string;
  closeResult1: string;
  collection = { count: null, Listtel: [] };
  config:any;
 
  ngOnInit() {
    // 
    this.loadComplaints();
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  Delete(content)
  {
    console.log(this.idSelected);
    this.techservice.delete(this.idSelected).subscribe(
      (data) =>{
        console.log(data);
        this.toastr.error('Delete line', 'Line deleted with success!',
        {timeOut: 2000});
        this.modalService.dismissAll();
        this.loadComplaints();

      }
    )
    
  }
  Disable(content)
  {
    console.log(this.idSelected);
    this.techservice.changelinestate(this.idSelected,0).subscribe(
      (data) =>{
        console.log(data);
        this.modalService.dismissAll();
        this.loadComplaints();

      }
    )
    
  }
  loadComplaints()
  {
    this.techservice.MyTelline().subscribe(
      (Data) => {
        this.collection.Listtel = Data ; 
        this.collection.count =Data.length;
        console.log("Complaints"+Data);
      }
     )
     this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  
  
  
  Open(content,id) {
    this.idSelected=id;
   this.modalService.open(content, {ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
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
