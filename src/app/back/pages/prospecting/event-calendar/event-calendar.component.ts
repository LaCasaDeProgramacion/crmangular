import { Router } from '@angular/router';
import { EventService } from './../../../../services/prospectingManagement/event.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import {EventSettingsModel, ScheduleComponent,  PopupOpenEventArgs, CurrentAction
} from '@syncfusion/ej2-angular-schedule';
import { L10n } from '@syncfusion/ej2-base';
import {  DatePicker } from '@syncfusion/ej2-calendars';
import { Evenement } from 'src/app/entities/Evenement';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

L10n.load({
  'en-US': {
      'schedule': {
        'saveButton' : 'Save',
        'cancelButton' : 'Close',
        'deleteButton' : '',
        'updateButton' :'',
        'newEvent': 'Add Evenement'
      }
  }
});
@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {
  title = 'crud4';
  liste:{id:0, name:'', startDate:null, endDate:null}[]=[];
  event : Evenement={id:0, name:'', startDate:null, endDate:null};
  E:Evenement={id:0, name:'', startDate:null, endDate:null};
  name;
  startDate;
  endDate;
  eventsDB;
  closeResult: string;
  closeResult1: string;
  EventToRemove;

  constructor(private evenementService:EventService, private modalService: NgbModal, private router: Router) {
    console.log("CONSTRUCTEUR ")
    this.loadEvents();
  }
  ngOnInit()
   {
    console.log("INIIIT ")
    this.loadEvents();
   }
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  public eventSettings: EventSettingsModel = {
      dataSource: this.liste,
      fields:{
        subject:{name:'name'},
        startTime:{name:'startDate'},
        endTime:{name:'endDate'}
      }

  };
  public selectedDate: Date = new Date(2019, 0, 1);
  private selectionTarget: Element;

  public onPopupOpen(args: PopupOpenEventArgs): void {
    this.selectionTarget = null;
    this.selectionTarget = args.target;
   console.log("DATA ", args.data  )
   console.log("ID ****", args.data['id'])
    if (args.type === 'Editor') {
      let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
      if (!startElement.classList.contains('e-datetimepicker')) {
          new DatePicker({ value: new Date(startElement.value) || new Date() }, startElement);
      }
      let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
      if (!endElement.classList.contains('e-datetimepicker')) {
          new DatePicker({ value: new Date(endElement.value) || new Date() }, endElement);
      }
  }

    }
   public onDetailsClick(): void {
        this.onCloseClick();
        const data: Object = this.scheduleObj.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;
        this.scheduleObj.openEditor(data, 'Add');
    }
  public convert(str)  {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  public onAddClick(): void {
    console.log("adding")
      this.onCloseClick();
      const data: Object = this.scheduleObj.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;
      const eventData: { [key: string]: Object } = this.scheduleObj.eventWindow.getObjectFromFormData('e-quick-popup-wrapper');
      this.scheduleObj.eventWindow.convertToEventData(data as { [key: string]: Object }, eventData);
      eventData.Id = this.scheduleObj.eventBase.getEventMaxID() as number + 1;


      let name= eventData.name.toString();
      let newDate1 = this.convert(eventData.startDate.toString()) ;
      let newDate2 = this.convert(eventData.endDate.toString()) ;
      this.evenementService.addCalendar(name, newDate1, newDate2).subscribe(data=>
       console.log(data));
       this.scheduleObj.addEvent(eventData);


  }
  public onUpdateClick(data)
  {
    console.log( " ID UPDAATE ******* " +data.id)

  }
  public onEditClick(args: any): void {
    if (this.selectionTarget) {
    let eventData: { [key: string]: Object } = this.scheduleObj.getEventDetails(this.selectionTarget) as { [key: string]: Object };
    let currentAction: CurrentAction = 'Save';
    if (!isNullOrUndefined(eventData.RecurrenceRule) && eventData.RecurrenceRule !== '') {
        if (args.target.classList.contains('e-edit-series')) {
        currentAction = 'EditSeries';
        eventData = this.scheduleObj.eventBase.getRecurrenceEvent(eventData);
        } else {
        currentAction = 'EditOccurrence';
        }
    }
    this.scheduleObj.openEditor(eventData, currentAction);
    let id= eventData.id.toString();
    let name= eventData.name.toString();
    let newDate1 = this.convert(eventData.startDate.toString()) ;
    let newDate2 = this.convert(eventData.endDate.toString()) ;
    this.evenementService.updateCalendar(id, name, newDate1, newDate2).subscribe(data=>
     console.log(data));

  }
}

  public onDeleteClick(args){
    this.onCloseClick();
    this.scheduleObj.eventSettings.allowDeleting = true;
    if (this.selectionTarget) {
    const eventData: { [key: string]: Object } = this.scheduleObj.getEventDetails(this.selectionTarget) as { [key: string]: Object };
    let currentAction: CurrentAction;

    if (!isNullOrUndefined(eventData.RecurrenceRule) && eventData.RecurrenceRule !== '') {
        currentAction = args.target.classList.contains('e-delete-series') ? 'DeleteSeries' : 'DeleteOccurrence';
    }
    console.log("ID +++" , eventData.id)
    console.log("ARGS" , args)
    let id= eventData.id.toString();
    this.evenementService.Delete(id).subscribe(data=>{
   /*   let index = this.liste.findIndex( record => record.id === eventData.id );
console.log(index)
console.log(this.liste)

      this.liste.splice(index,1);
console.log(this.liste)  */

      console.log(data);
      this.loadEvents();


    //  //this.scheduleObj.deleteEvent(eventData, currentAction);
    /* this.scheduleObj.eventSettings={
     dataSource: this.liste,
       fields:{
        subject:{name:'name'},
        startTime:{name:'startDate'},
         endTime:{name:'endDate'}
       }}; */
      //this.loadEvents();
    });
    // this.loadEvents();
    // this.scheduleObj.deleteEvent(eventData, currentAction);
    // this.loadEvents();


    }



}
  public onCloseClick() {
      this.scheduleObj.closeEditor();
  }


  loadEvents()
  {
    console.log("LOADING ..")
      this.evenementService.get().subscribe(data=> {
        this.eventsDB=data;
        this.eventsDB.forEach(element => {
         this.liste.push({id:element.id, name:element.name,
          startDate:element.startDate, endDate:element.endDate});
          this.scheduleObj.eventSettings.dataSource=this.liste;

        });
      });
   }
      //Add Event
    open1(content) {
      this.onCloseClick();
      this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    openarchive(e, content, id) {
      this.EventToRemove = id ;
      this.onCloseClick();

         this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
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
