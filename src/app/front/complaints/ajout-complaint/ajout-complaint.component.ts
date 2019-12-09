import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllcomplaintsComponent } from './../allcomplaints/allcomplaints.component';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { complaints } from './../../../entities/complaintsmanagement/complaints';
import { ComplaintsService } from './../../../services/complaintsManagement/complaints.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ComplaintObjectsService } from 'src/app/services/complaintsManagement/complaint-objects.service';
import { Query } from '@syncfusion/ej2-data';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-ajout-complaint',
  templateUrl: './ajout-complaint.component.html',
  styleUrls: ['./ajout-complaint.component.scss']
})
export class AjoutComplaintComponent implements OnInit {

  constructor(private cService:ComplaintsService,private OService:ComplaintObjectsService,private modalService: NgbModal) { }
  complaint:complaints={complaintBody:"",complaintObject:null};
  ObjectList=[];
  public fields: Object = { text: 'object', value: 'id' };
 
  ngOnInit() {
    this.OService.get().subscribe(
      (Data) => {
        this.ObjectList = Data ; 
        console.log("Complaints"+Data);
      }
     )
  }
  public onFiltering: EmitType<any> =  (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("object", "startswith", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.ObjectList, query);
  };
  onSubmit()
  {
    this.cService.add(this.complaint).subscribe(
      (data)=>
      {
        
        console.log(data);
      }
    )
  }
  

}
