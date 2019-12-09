import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { technician } from './../../../../entities/complaintsmanagement/technician';
import { TechnicianService } from './../../../../services/complaintsManagement/technician.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.scss']
})
export class TechnicianComponent implements OnInit {

  constructor(private techservice:TechnicianService,private modalService: NgbModal,private toastr: ToastrService) { }
  collection = { count: null, Listtech: [] };

  Listtech=[];
  cancelClicked:boolean=false;
  SelectedComplaint:technician;
  idSelected:number;
  searchText;
  closeResult: string;
  closeResult1: string;
  technician:technician={technicianFirstName:"",technicianSecondName:"",technicianSpecialty:"",technicianPhoneNumber:""};
config:any;
 
  ngOnInit() {
    this.techservice.get().subscribe(
      (Data) => {
        this.collection.Listtech = Data ; 
        this.collection.count = Data.length;
        console.log("tech"+Data);
      }
     )
     this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  Delete(content)
  {
    console.log(this.idSelected);
    this.techservice.delete(this.idSelected).subscribe(
      (data) =>{
        console.log(data);
        this.modalService.dismissAll();
        this.toastr.error('Delete technician', 'Technician deleted with success!',
        {timeOut: 2000});
        this.loadComplaints();

      }
    )
    
  }
  loadComplaints()
  {
    this.techservice.get().subscribe(
      (Data) => {
        this.collection.Listtech = Data ; 
        this.collection.count = Data.length;
        console.log("tech"+Data);
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
  onSubmit()
  {
    this.techservice.add(this.technician).subscribe(
      (data) => {
        console.log(data);
        this.modalService.dismissAll();
        this.toastr.success('Add technician', 'Technician added with success!',
        {timeOut: 2000});
        this.loadComplaints();

      }
    )
  }
  Update()
  {
    this.techservice.update(this.idSelected,this.technician).subscribe(
      (data) => {
        console.log(data);
        this.modalService.dismissAll();
        this.toastr.success('Update technician', 'Technician updated with success!',
        {timeOut: 2000});
        this.loadComplaints();

      }
    )
  }
  OpenUpdate(update,id,fname,sname,sepc,num)
  {
    this.idSelected=id;
    this.technician={technicianFirstName:fname,technicianSecondName:sname,technicianSpecialty:sepc,technicianPhoneNumber:num};

    this.modalService.open(update, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
