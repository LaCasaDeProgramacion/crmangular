import { ComplaintObjectsService } from './../../../../services/complaintsManagement/complaint-objects.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { complaintobject } from 'src/app/entities/complaintsmanagement/complaintobject';

@Component({
  selector: 'app-object-complaint',
  templateUrl: './object-complaint.component.html',
  styleUrls: ['./object-complaint.component.scss']
})
export class ObjectComplaintComponent implements OnInit {

  constructor(private obejctser:ComplaintObjectsService,private modalService: NgbModal) { }
  Listtech=[];
  cancelClicked:boolean=false;
  SelectedComplaint:complaintobject;
  idSelected:number;
  searchText;
  closeResult: string;
  closeResult1: string;
  cObject:complaintobject={object:""};

  ngOnInit() {
    this.obejctser.get().subscribe(
      (Data) => {
        this.Listtech = Data ; 
        console.log("Complaints"+Data);
      }
     )
  }

  Delete()
  {
    console.log(this.idSelected);
    this.obejctser.delete(this.idSelected).subscribe(
      (data) =>{
        console.log(data);
        this.modalService.dismissAll();
        this.loadComplaints();

      }
    )
    
  }
  loadComplaints()
  {
    this.obejctser.get().subscribe(
      (Data) => {
        this.Listtech = Data ; 
        console.log("Complaints"+Data);
      }
     )
  }
  onSubmit()
  {
    this.obejctser.add(this.cObject).subscribe(
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
