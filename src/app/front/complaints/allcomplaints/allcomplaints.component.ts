import { complaints } from './../../../entities/complaintsmanagement/complaints';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { ComplaintTypesService } from './../../../services/complaintsManagement/complaint-types.service';
import { ComplaintsService } from './../../../services/complaintsManagement/complaints.service';
import { Component, OnInit } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { ComplaintObjectsService } from 'src/app/services/complaintsManagement/complaint-objects.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-allcomplaints',
  templateUrl: './allcomplaints.component.html',
  styleUrls: ['./allcomplaints.component.scss']
})
export class AllcomplaintsComponent implements OnInit {

  constructor(private typeser:ComplaintTypesService,private complaintscervice:ComplaintsService,private modalService: NgbModal,private OService:ComplaintObjectsService,private toastr: ToastrService) { }
  ListComplaints=[];
  typeList=[];
  collection = { count: null, ListComplaints: [] };
  selctedType: 'All';
  Closed_without_solution =false;
  Opened =false ;
  In_Progress=false;
  Treated =false;
config:any;
searchText;
closeResult:string;
complaint:complaints={complaintBody:"",complaintObject:null};
ObjectList=[];
role=localStorage['Role'];
public fields1: Object = { text: 'object', value: 'id' };
  ngOnInit() {
    this.complaintscervice.get().subscribe(
      (Data) => {
        this.collection.ListComplaints = Data ; 
        this.collection.count = Data.length;
        console.log("tech"+Data);
      }
     )
     this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.collection.count
    };
    this.typeser.get().subscribe(
      (Data) => {
        this.typeList = Data ; 
        console.log("tech"+Data);
      }
     )
     this.OService.get().subscribe(
      (Data) => {
        this.ObjectList = Data ; 
        console.log("Complaints"+Data);
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
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  public fields: Object = { text: 'typeName', value: 'typeName' };

  public onFiltering: EmitType<any> =  (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("typeName", "startswith", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.typeList, query);
  };

  ChangeState(event)
  {
    if(event.target.checked)
    {
      this.complaintscervice.getByState("Opened").subscribe(
        (Data) => {
          this.collection.ListComplaints = Data ; 
          this.collection.count = Data.length;
          console.log("tech"+Data);
        }
       )
       this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.collection.count
      };
    }
    else
    {
      this.complaintscervice.get().subscribe(
        (Data) => {
          this.collection.ListComplaints = Data ; 
          this.collection.count = Data.length;
          console.log("tech"+Data);
        }
       )
       this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.collection.count
      };
    }
  }
  ChangeState1(event){
    if(event.target.checked)
    
    {
      this.complaintscervice.getByState("treated").subscribe(
        (Data) => {
          this.collection.ListComplaints = Data ; 
          this.collection.count = Data.length;
          console.log("tech"+Data);
        }
       )
       this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.collection.count
      };
    }
    else
    {
      this.complaintscervice.get().subscribe(
        (Data) => {
          this.collection.ListComplaints = Data ; 
          this.collection.count = Data.length;
          console.log("tech"+Data);
        }
       )
       this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.collection.count
      };
    }
  }
  ChangeState2(event){
    if(event.target.checked)
    
    {
      this.complaintscervice.getByState("In_progress").subscribe(
        (Data) => {
          this.collection.ListComplaints = Data ; 
          this.collection.count = Data.length;
          console.log("tech"+Data);
        }
       )
       this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.collection.count
      };
    }
    else
    {
      this.complaintscervice.get().subscribe(
        (Data) => {
          this.collection.ListComplaints = Data ; 
          this.collection.count = Data.length;
          console.log("tech"+Data);
        }
       )
       this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.collection.count
      };
    }
  }
  ChangeState3(event){
    if(event.target.checked)
    
    {
      this.complaintscervice.getByState("Closed_without_Solution").subscribe(
        (Data) => {
          this.collection.ListComplaints = Data ; 
          this.collection.count = Data.length;
          console.log("tech"+Data);
        }
       )
       this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.collection.count
      };
    }
    else
    {
      this.complaintscervice.get().subscribe(
        (Data) => {
          this.collection.ListComplaints = Data ; 
          this.collection.count = Data.length;
          console.log("tech"+Data);
        }
       )
       this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.collection.count
      };
    }
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
   
 
  
  public onFiltering1: EmitType<any> =  (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("object", "startswith", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.ObjectList, query);
  };
  onSubmit()
  {
    this.complaintscervice.add(this.complaint).subscribe(
      (data)=>
      {
        this.toastr.success('Add complaint', 'Complaint added with success!',
        {timeOut: 2000});
        this.loadComplaints();
        this.complaint={complaintBody:"",complaintObject:null};

        console.log(data);
      }
    )
  }

}
