import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { ComplaintTypesService } from './../../../services/complaintsManagement/complaint-types.service';
import { ComplaintsService } from './../../../services/complaintsManagement/complaints.service';
import { Component, OnInit } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-mycomplaints',
  templateUrl: './mycomplaints.component.html',
  styleUrls: ['./mycomplaints.component.scss']
})
export class MycomplaintsComponent implements OnInit {

  constructor(private typeser:ComplaintTypesService,private complaintscervice:ComplaintsService) { }
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
  ngOnInit() {
    this.complaintscervice.myComplaint().subscribe(
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
  }
  loadComplaints()
  {
    this.complaintscervice.myComplaint().subscribe(
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

}

