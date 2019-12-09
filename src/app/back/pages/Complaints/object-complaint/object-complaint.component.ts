import { ComplaintObjectsService } from './../../../../services/complaintsManagement/complaint-objects.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { complaintobject } from 'src/app/entities/complaintsmanagement/complaintobject';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-object-complaint',
  templateUrl: './object-complaint.component.html',
  styleUrls: ['./object-complaint.component.scss']
})
export class ObjectComplaintComponent implements OnInit {

  constructor(private obejctser:ComplaintObjectsService,private modalService: NgbModal,private toastr: ToastrService) { }
  Listtech=[];
  cancelClicked:boolean=false;
  SelectedComplaint:complaintobject;
  idSelected:number;
  searchText;
  closeResult: string;
  closeResult1: string;
  cObject:complaintobject={object:""};
  collection = { count: null, Listtech: [] };
config:any;
  ngOnInit() {
    this.obejctser.get().subscribe(
      (Data) => {
        this.collection.Listtech = Data ; 
        this.collection.count= Data.length;
        console.log("Complaints"+Data);
      }
     )
     this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  Delete()
  {
    console.log(this.idSelected);
    this.obejctser.delete(this.idSelected).subscribe(
      (data) =>{
        console.log(data);
        this.modalService.dismissAll();
        this.toastr.error('Delete Object', 'Object deleted with success!',
        {timeOut: 2000});
        this.loadComplaints();

      }
    )

    
  }
  loadComplaints()
  {
    this.obejctser.get().subscribe(
      (Data) => {
        this.collection.Listtech = Data ; 
        this.collection.count= Data.length;
        console.log("Complaints"+Data);
      }
     )
     this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  onSubmit()
  {
    this.obejctser.add(this.cObject).subscribe(
      (data) => {
        console.log(data);
        this.modalService.dismissAll();
        this.toastr.success('Add object', 'Object added with success!',
        {timeOut: 2000});
        this.loadComplaints();

      }
    )
  }
  
  
  Open(content,id) {
    this.idSelected=id;
   this.modalService.open(content, {ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
 }
 Opena(content) {
 this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
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
