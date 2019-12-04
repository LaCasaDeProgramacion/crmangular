import { StatisticsComplaintService } from './../../../../services/complaintsManagement/statistics-complaint.service';
import { Observable } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { complaints } from './../../../../entities/complaintsmanagement/complaints';
import { ComplaintsService } from './../../../../services/complaintsManagement/complaints.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {
  ListComplaints=[];
  cancelClicked:boolean=false;
  SelectedComplaint:complaints;
  idSelected:number;
  searchText;
  Ttechnical;
  TFinicial;
  TRelational;
  TClosed;
  TOpened;
  TInProg;
  TTreated;
  collection = { count: null, ListComplaints: [] };
config:any;
  constructor(private complaintscervice:ComplaintsService,private statscervice:StatisticsComplaintService,private modalService: NgbModal) { }
  closeResult: string;
  closeResult1: string;
  ngOnInit() {
    this.complaintscervice.get().subscribe(
      (Data) => {
        this.collection.ListComplaints = Data ; 
        this.collection.count = Data.length;
        console.log("tech"+Data);
      }
     )
     this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
    
     this.statscervice.getTClosed().subscribe(
       
         (Data)=>{
          this.TClosed = Data;
         }
       
     )
     this.statscervice.getTFinancial().subscribe(
       
      (Data)=>{
       this.TFinicial = Data;
      }
    
  )
  this.statscervice.getTInProgress().subscribe(
       
    (Data)=>{
     this.TInProg = Data;
    }
  
)
this.statscervice.getTOpened().subscribe(
       
  (Data)=>{
   this.TOpened = Data;
  }

)
this.statscervice.getTRelantional().subscribe(
       
  (Data)=>{
   this.TRelational = Data;
  }
  

)
this.statscervice.getTTeated().subscribe(
       
  (Data)=>{
   this.TTreated = Data;
  }
  

)
this.statscervice.getTTechnical().subscribe(
       
  (Data)=>{
   this.Ttechnical = Data;
  }
  

)
  }
  loadComplaints()
  {
    this.complaintscervice.get().subscribe(
      (Data) => {
        this.collection.ListComplaints = Data ; 
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
  AffectTech(id:number){
    this.complaintscervice.AffectTechnician(id).subscribe(
      (data) =>{
        console.log(data);
        this.modalService.dismissAll();
        this.loadComplaints();
      }
    )
  }
  
   Delete(content)
  {
    console.log(this.idSelected);
    this.complaintscervice.delete(this.idSelected).subscribe(
      (data) =>{
        console.log(data);
        this.modalService.dismissAll();
        this.loadComplaints();
      }
    )
    
    
  }
  Detail(id:number)
  {
    this.complaintscervice.getById(id).subscribe(
      (data) => {this.SelectedComplaint = data;
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
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
OpenAjout(ajout)
{
  this.modalService.open(ajout, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

  

}
