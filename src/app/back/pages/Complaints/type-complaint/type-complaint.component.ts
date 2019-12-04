import { ComplaintTypesService } from './../../../../services/complaintsManagement/complaint-types.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { complainttype } from 'src/app/entities/complaintsmanagement/complaintstype';
import { complaintobject } from 'src/app/entities/complaintsmanagement/complaintobject';

@Component({
  selector: 'app-type-complaint',
  templateUrl: './type-complaint.component.html',
  styleUrls: ['./type-complaint.component.scss']
})
export class TypeComplaintComponent implements OnInit {

  constructor(private typeser:ComplaintTypesService,private modalService: NgbModal) { }
  Listtech=[];
  cancelClicked:boolean=false;
  SelectedComplaint:complainttype;
  idSelected:number;
  searchText;
  closeResult: string;
  closeResult1: string;
  type:complainttype={typeName:""};
  collection = { count: null, Listtech: [] };
  config:any;

  ngOnInit() {
    this.typeser.get().subscribe(
      (Data) => {
        this.collection.Listtech = Data ; 
        this.collection.count = Data.length;
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
    this.typeser.delete(this.idSelected).subscribe(
      (data) =>{
        console.log(data);
        this.modalService.dismissAll();
        this.loadComplaints();

      }
    )
    
  }
  loadComplaints()
  {
    this.typeser.get().subscribe(
      (Data) => {
        this.collection.Listtech = Data ; 
        this.collection.count = Data.length;
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
    this.typeser.add(this.type).subscribe(
      (data) => {
        console.log(data);
        this.modalService.dismissAll();
        this.loadComplaints();

      }
    )
  }
  
  
  Open(content,id) {
    this.idSelected=id;
   this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
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



