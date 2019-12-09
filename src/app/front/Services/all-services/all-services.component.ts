import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { ServiceLineService } from './../../../services/TelLineManagament/service-line.service';
import { Component, OnInit } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {

  constructor(private ser:ServiceLineService) { }
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
    this.ser.getEnabled().subscribe(
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
  loadComplaints()
  {
    this.ser.getEnabled().subscribe(
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
  public fields: Object = { text: 'typeName', value: 'typeName' };

  public onFiltering: EmitType<any> =  (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("typeName", "startswith", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.typeList, query);
  };

  


}
