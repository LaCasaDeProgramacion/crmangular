import { ServicesLines } from './../../../../entities/tellinemanagement/ServicesLines';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServiceLineService } from './../../../../services/TelLineManagament/service-line.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services-lines',
  templateUrl: './services-lines.component.html',
  styleUrls: ['./services-lines.component.scss']
})
export class ServicesLinesComponent implements OnInit {

  constructor(private techservice:ServiceLineService,private modalService: NgbModal,private toastr: ToastrService) { }
  Listtel=[];
  cancelClicked:boolean=false;
  Selectedtel:ServicesLines;
  idSelected:number;
  searchText;
  closeResult: string;
  closeResult1: string;
  telline:ServicesLines={serviceDescription:"",serviceName:"",activationCode:""};
  collection = { count: null, Listtel: [] };
  config:any;
 
  ngOnInit() {
    this.techservice.get().subscribe(
      (Data) => {
        this.collection.Listtel = Data ; 
        this.collection.count =Data.length;
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
  
  loadComplaints()
  {
    this.techservice.get().subscribe(
      (Data) => {
        this.collection.Listtel = Data ; 
        this.collection.count =Data.length;
        console.log("tech"+Data);
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
    this.techservice.add(this.telline).subscribe(
    (data) => {
    console.log(data);
    this.telline={serviceDescription:"",serviceName:"",activationCode:""};

         this.modalService.dismissAll();
         this.toastr.success('Add Service', 'Service added with success!',
        {timeOut: 2000});
         this.loadComplaints();

       }
     )
  }
  Update()
  {
    this.techservice.update(this.telline,this.idSelected).subscribe(
      (data) => {
        console.log(data);
        this.telline={serviceDescription:"",serviceName:"",activationCode:""};

        this.modalService.dismissAll();
        this.toastr.success('Update service', 'Service updated with success!',
        {timeOut: 2000});
        this.loadComplaints();

      }
    )
  }
  OpenUpdate(update,id,desc,name,code)
  {
    this.idSelected=id;
    this.telline={serviceDescription:desc,serviceName:name,activationCode:code};

    this.modalService.open(update, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
OpenDisable(content,id:number) {
  this.idSelected=id;
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