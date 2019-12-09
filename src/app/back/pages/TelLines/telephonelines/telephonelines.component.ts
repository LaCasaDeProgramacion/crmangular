import { UserService } from 'src/app/services/user.service';
import { ServiceLineService } from './../../../../services/TelLineManagament/service-line.service';
import { TellineService } from './../../../../services/TelLineManagament/telline.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { TelephoneLines } from 'src/app/entities/tellinemanagement/TelephoneLines';
import { EmitType } from '@syncfusion/ej2-base';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { GroupSettingsModel } from '@syncfusion/ej2-grids';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-telephonelines',
  templateUrl: './telephonelines.component.html',
  styleUrls: ['./telephonelines.component.scss']
})
export class TelephonelinesComponent implements OnInit {

  constructor(private techservice:TellineService,private lineSer:ServiceLineService,private userser:UserService,private modalService: NgbModal,private toastr: ToastrService) { }
  Listtel=[];
  cancelClicked:boolean=false;
  Selectedtel:TelephoneLines;
  idSelected:number;
  searchText;
  closeResult: string;
  closeResult1: string;
  telline:TelephoneLines={lineNumber:"",codePIN:null,codePUK:null,services:null,user:null};
  Servicelist=[];
  Userlist=[];
  public fields: Object = { text: 'serviceName', value: 'id' };
  public fields1: Object = { text: 'username', value: 'id' };
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
        this.modalService.dismissAll();
        this.toastr.error('Delete line', 'Line deleted with success!',
        {timeOut: 2000});
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
        this.toastr.error('Disable line', 'Line disabled with success!',
        {timeOut: 2000});
        this.loadComplaints();

      }
    )
    
  }
  loadComplaints()
  {
    this.techservice.get().subscribe(
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
  onSubmit()
  {
    this.techservice.add(this.telline).subscribe(
    (data) => {
    console.log(data);
    this.telline={lineNumber:"",codePIN:null,codePUK:null,services:null,user:null};

         this.modalService.dismissAll();
         this.toastr.success('Add line', 'Line added with success!',
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
        this.telline={lineNumber:"",codePIN:null,codePUK:null,services:null,user:null};

        this.modalService.dismissAll();
        this.toastr.success('Update line', 'line updated with success!',
        {timeOut: 2000});
        this.loadComplaints();

      }
    )
  }
  OpenUpdate(update,id,fname,sname,sepc,num)
  {
    this.lineSer.getEnabled().subscribe(
      (Data) => {
        this.Servicelist = Data ; 
        console.log("tech"+Data);
      }
     )
    this.idSelected=id;
    this.telline={lineNumber:fname,codePIN:sname,codePUK:sepc};

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
  this.lineSer.getEnabled().subscribe(
    (Data) => {
      this.Servicelist = Data ; 
      console.log("tech"+Data);
    }
   )
   this.userser.getClients().subscribe(
    (Data) => {
      this.Userlist = Data ; 
      console.log("tech"+Data['username']);
    }
   )
 this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
   this.closeResult = `Closed with: ${result}`;
 }, (reason) => {
   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
 });
}
OpenDisable(content,id:number) {
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
 public onFiltering: EmitType<any> =  (e: FilteringEventArgs) => {
  let query = new Query();
  //frame the query based on search string with filter type.
  query = (e.text != "") ? query.where("serviceName", "startswith", e.text, true) : query;
  //pass the filter data source, filter query to updateData method.
  e.updateData(this.Servicelist, query);
};
public onFiltering1: EmitType<any> =  (e: FilteringEventArgs) => {
  let query = new Query();
  //frame the query based on search string with filter type.
  query = (e.text != "") ? query.where("username", "startswith", e.text, true) : query;
  //pass the filter data source, filter query to updateData method.
  e.updateData(this.Userlist, query);
};

}
